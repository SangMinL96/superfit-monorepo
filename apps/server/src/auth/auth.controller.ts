import { ExecResultItf } from "@superfit/types/fetcher";
import { oAuthSignupParamsItf, signupParamsItf } from "@superfit/types/auth";
import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SmtpService } from "@src/_common/SMTP/smtp.service";
import { AuthService } from "./auth.service";
import { MysqlService } from "@src/_common/DB/mysql.service";
import { UserInfoItf } from "@superfit/types/user";
import { userInfoQuery } from "@src/login/query";
import { findByIdUserInfoQuery } from "./query";
import { setPayload } from "@src/_common/jwt/utils";

@Controller("/api/v1/auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
    private smtpService: SmtpService,
    private readonly mysqlService: MysqlService
  ) {
    // private readonly connectionService: MysqlService, // private readonly authService: AuthService,
  }
  @Post("user-hp/dup-check")
  async userHpDupCheck(
    @Body() body: { userHp: string }
  ): Promise<ExecResultItf> {
    const result = await this.authService.userHpDupCheck(body);
    return result;
  }
  @Post("user-id/dup-check")
  async userIdDupCheck(
    @Body() body: { userId: string }
  ): Promise<ExecResultItf> {
    const result = await this.authService.userIdDupCheck(body);
    return result;
  }
  @Post("hpAuthNum-send")
  async hpAuthNumSend(@Body() body: { hp: string }): Promise<ExecResultItf> {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const params = {
      ...body,
      randomNum: String(randomNum),
    };
    const result = await this.authService.hpAuthNumberSend(params);
    return result;
  }
  @Post("authNum-check")
  async authNumCheck(
    @Body() body: { hp: string; authNum: string }
  ): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    return await this.authService.hpAuthNumberCheck(params);
  }

  @Post("/sendMail")
  async sendMail(
    @Body() body: { email: string; authNum: string }
  ): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    return await this.smtpService.emilAuthSMTP(params);
  }

  @Post("/user-signup")
  async userSignup(@Body() body: signupParamsItf): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    return await this.authService.userSignup(params);
  }

  @Post("/oauth/user-signup")
  async oauthUserSignup(
    @Body() body: oAuthSignupParamsItf
  ): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    return await this.authService.oAuthUserSignup(params);
  }
  @Post("/naver-userinfo")
  async naverToken(
    @Body() body: { code: string; state: string }
  ): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    const tokenRes = await fetch(
      `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&code=${params.code}&state=${params.state}`
    );
    const { access_token } = (await tokenRes.json()) as any;
    if (access_token) {
      const infoRes = await fetch(`https://openapi.naver.com/v1/nid/me`, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const info = (await infoRes.json()) as any;
      if (info.message === "success") {
        return { result: "success", data: info.response };
      } else {
        return { result: "fail" };
      }
    } else {
      return { result: "fail" };
    }
  }
  @Post("refresh-validate")
  async authRefreshToken(@Headers() Headers: any): Promise<ExecResultItf> {
    const clientRefreshToken = String(Headers.authorization).replace(
      "Bearer ",
      ""
    );
    try {
      const clientTokenInfo = await this.jwtService.verify(clientRefreshToken, {
        publicKey: process.env.JWT_SECRET,
      });
      const { token } = await this.authService.refreshTokenUser(
        clientTokenInfo.user_uuid
      );
      const verified = (await this.jwtService.verify(token, {
        publicKey: process.env.JWT_SECRET,
      })) as any;
      if (clientTokenInfo.user_uuid === verified.user_uuid) {
        const [user] = await this.mysqlService.getQuery<UserInfoItf[]>(
          findByIdUserInfoQuery(),
          {
            user_uuid: clientTokenInfo.user_uuid,
          }
        );
        const access_token = await this.authService.createToken(
          setPayload(user)
        );
        return { result: "success", data: access_token };
      } else {
        return { result: "fail", data: "" };
      }
    } catch (err) {
      return { result: "fail", data: "" };
    }
  }
}
