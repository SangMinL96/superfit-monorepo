import { MysqlService } from "@common/DB/mysql.service";
import { ExecResultItf } from "@superfit/types/fetcher";
import { UserInfoItf } from "@superfit/types/user";
import { oAuthSignupParamsItf, signupParamsItf } from "@superfit/types/auth";

import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as CryptoJS from "crypto-js";
import {
  businessUserSignupQuery,
  getRefreshTokenQuery,
  oAuthUserSignupQuery,
  phoneAuthNumQuery,
  postPhoneAuthCheck,
  userSignupQuery,
} from "./query";
import { createHashedPassword } from "@src/_common/utils/crypto";
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService
  ) {
    //
  }

  async userSignup(params: signupParamsItf): Promise<ExecResultItf> {
    console.log(params);
    const { password, salt } = (await createHashedPassword(params.userPw)) as {
      password: string;
      salt: string;
    };
    const result = await this.mysqlService.execQuery(userSignupQuery(), {
      ...params,
      userPw: password,
      pwSalt: salt,
    });
    return result;
  }
  async oAuthUserSignup(params: oAuthSignupParamsItf): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      oAuthUserSignupQuery(),
      params
    );
    return result;
  }

  async businessUserSignup(params: signupParamsItf): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(userSignupQuery(), params);
    if (result.data.insertId) {
      return await this.mysqlService.execQuery(businessUserSignupQuery(), {
        ...params,
        user_id: result.data.insertId,
      });
    } else {
      return { result: "fail" };
    }
  }

  createToken(payload: UserInfoItf): string {
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: "3d",
      privateKey: process.env.JWT_SECRET,
    });
    return token;
  }

  createRefreshToken(payload: UserInfoItf): string {
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: "14d",
      privateKey: process.env.JWT_SECRET,
    });
    return token;
  }

  async hpAuthNumberSend(params: {
    hp: string;
    randomNum: string;
  }): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      phoneAuthNumQuery(),
      params
    );
    return { result: "success" };
    const makeSignature = () => {
      const space = " "; // one space
      const newLine = "\n"; // new line
      const method = "POST"; // method
      const url = `/sms/v2/services/${process.env.NAVER_SMS_SERVICE_KEY}/messages`; // url (include query string)
      const timestamp = `${Date.now().toString()}`; // current timestamp (epoch)
      const accessKey = process.env.NAVER_ACCESS_KEY; // access key id (from portal or Sub Account)
      const secretKey = process.env.NAVER_SECRET_KEY; // secret key (from portal or Sub Account)
      const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
      hmac.update(method);
      hmac.update(space);
      hmac.update(url);
      hmac.update(newLine);
      hmac.update(timestamp);
      hmac.update(newLine);
      hmac.update(accessKey);
      const hash = hmac.finalize();
      return hash.toString(CryptoJS.enc.Base64);
    };
    const postRes = await fetch(
      `https://sens.apigw.ntruss.com/sms/v2/services/${process.env.NAVER_SMS_SERVICE_KEY}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": `application/json; charset=utf-8`,
          "x-ncp-apigw-timestamp": `${Date.now().toString()}`,
          "x-ncp-iam-access-key": process.env.NAVER_ACCESS_KEY,
          "x-ncp-apigw-signature-v2": makeSignature(),
        },
        body: JSON.stringify({
          type: "SMS",
          countryCode: "82",
          from: "01037943814",
          content: `[EIGHT] 인증번호: ${params.randomNum}\n인증번호를 입력해주세요.`,
          messages: [{ to: `01037943814` }],
        }),
      }
    );
    const post = (await postRes.json()) as any;
    if (post.statusName === "success") {
      return { result: "success" };
    } else {
    }
    return { result: "fail" };
  }
  async hpAuthNumberCheck(params: { hp: string; authNum: string }) {
    const [result] = await this.mysqlService.getQuery<
      { hp: string; auth_num }[]
    >(postPhoneAuthCheck(), params);
    console.log(params);
    console.log(result, "result");
    if (result) return { result: "success" };
    return { result: "fail" };
  }
  async refreshTokenUser(params: { ent_code: string; name: string }) {
    const [result] = await this.mysqlService.getQuery<
      { refresh_token: string }[]
    >(getRefreshTokenQuery(), params);
    return result;
  }
}
