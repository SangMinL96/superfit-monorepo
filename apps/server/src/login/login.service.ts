import { MysqlService } from "@common/DB/mysql.service";
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { getHashePassword } from "@src/_common/utils/crypto";
import { ExecResultItf } from "@superfit/types/fetcher";
import { oAuthLoginParamsItf } from "@superfit/types/login";
import { UserInfoItf } from "@superfit/types/user";
import { AuthService } from "src/auth/auth.service";
import {
  oAuthUserQuery,
  updateRefreshTokenQuery,
  userInfoQuery,
} from "./query";
import { setPayload } from "@src/_common/jwt/utils";
@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    private readonly MysqlService: MysqlService
  ) {
    //
  }
  async nomalLogin({ userId, userPw }: any): Promise<ExecResultItf> {
    const [user] = await this.MysqlService.getQuery<UserInfoItf[]>(
      userInfoQuery(),
      {
        userId,
      }
    );
    if (!user) {
      throw new NotFoundException("해당 아이디가 존재하지 않아요.");
    }
    const { password } = (await getHashePassword(userPw, user.pw_salt)) as {
      password: string;
    };
    if (password === user.user_pw) {
      const tokenPayload = setPayload(user);
      const access_token = await this.authService.createToken(tokenPayload);
      const refresh_token = await this.authService.createRefreshToken(
        tokenPayload
      );
      if (refresh_token) {
        const { result } = await this.MysqlService.execQuery(
          updateRefreshTokenQuery(),
          {
            user_uuid: user.user_uuid,
            refresh_token,
          }
        );
        if (result === "fail") {
          return { result: "fail" };
        }
      }
      console.log(access_token, refresh_token);
      return { data: { access_token, refresh_token }, result: "success" };
    } else {
      throw new InternalServerErrorException("비밀번호가 틀렸습니다.");
    }
  }

  async oAuthLogin({ snsId, loginType }: oAuthLoginParamsItf) {
    const [user] = await this.MysqlService.getQuery<UserInfoItf[]>(
      oAuthUserQuery(),
      {
        snsId,
        loginType,
      }
    );
    if (!user) {
      return { result: "notFound_user" };
    }
    const tokenPayload = setPayload(user);
    const access_token = await this.authService.createToken(tokenPayload);
    const refresh_token = await this.authService.createRefreshToken(
      tokenPayload
    );
    if (refresh_token) {
      const { result } = await this.MysqlService.execQuery(
        updateRefreshTokenQuery(),
        {
          user_uuid: user.user_uuid,
          refresh_token,
        }
      );
      if (result === "fail") {
        return { result: "fail" };
      }
    }
    return { data: { access_token, refresh_token }, result: "success" };
  }
}
