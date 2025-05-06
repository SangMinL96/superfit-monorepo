import { MysqlService } from "@common/DB/mysql.service";
import { ExecResultItf } from "@superfit/types/fetcher";
import { UserInfoItf } from "@superfit/types/user";
import { oAuthSignupParamsItf, signupParamsItf } from "@superfit/types/auth";

import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as CryptoJS from "crypto-js";
import {
  getRefreshTokenQuery,
  oAuthUserSignupQuery,
  phoneAuthNumQuery,
  postPhoneAuthCheck,
  postUserHpDupCheckQuery,
  postUserIdDupCheckQuery,
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
  async userHpDupCheck(params: { userHp: string }): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      postUserHpDupCheckQuery(),
      params
    );
    const resultData = result.data;
    if (resultData.length > 0) {
      const type = {
        kakao: "카카오톡 계정으로 이미 가입되어 있습니다",
        naver: "네이버 계정으로 이미 가입되어 있습니다",
        basic: `"${resultData[0]?.user_id}" 계정으로 이미 가입되어 있습니다`,
        business: `"${resultData[0]?.user_id}" 제휴계정으로 이미 가입되어 있습니다`,
      };
      return { result: "fail", data: type[resultData[0].login_type] };
    }
    return result;
  }
  async userIdDupCheck(params: { userId: string }): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      postUserIdDupCheckQuery(),
      params
    );
    if (result.data.length > 0) {
      return { result: "fail" };
    }
    return result;
  }
  async userSignup(params: signupParamsItf): Promise<ExecResultItf> {
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
    console.log(params, "인증번호");
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
    if (result) return { result: "success" } as ExecResultItf;
    return { result: "fail" } as ExecResultItf;
  }
  async refreshTokenUser(userUuid) {
    const [result] = await this.mysqlService.getQuery<{ token: string }[]>(
      getRefreshTokenQuery(),
      { userUuid }
    );
    return result;
  }
}
