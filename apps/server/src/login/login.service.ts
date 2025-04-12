import { MysqlService } from '@common/DB/mysql.service';

import { LoginParamsItf, oAuthLoginParamsItf } from '@superfit/types/login';
import { UserInfoItf } from '@superfit/types/user';
// import {  isEmpty } from '@superfit/shared';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { oAuthUserQuery, updateRefreshTokenQuery, phoneUserQuery } from './query';
const isEmpty = (t: any) => {
    return true;
};
@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService, private readonly MysqlService: MysqlService) {
        //
    }
    async phoneLogin({ hp }: LoginParamsItf): Promise<any> {
        const user = await this.MysqlService.getQuery<UserInfoItf[]>(phoneUserQuery(), { hp });
        if (!isEmpty(user)) {
            return { result: 'notFound_user' };
        }
        const isOauth = ['kakao', 'naver', 'apple'];
        const [nomalUser] = user.filter(item => !isOauth.includes(item.login_type));
        const isOauthUser = user.find(item => isOauth.includes(item.login_type));
        if (isEmpty(isOauthUser)) {
            return { result: 'isOauth', data: { oAuthType: isOauthUser?.login_type } };
        }
        const tokenPayload = {
            id: nomalUser.id,
            user_email: nomalUser.user_email,
            user_name: nomalUser.user_name,
            login_type: nomalUser.login_type,
            center_id: nomalUser.center_id,
            isBusiness: nomalUser.login_type === 'business',
        };
        const access_token = await this.authService.createToken(tokenPayload);
        const refresh_token = await this.authService.createRefreshToken(tokenPayload);
        if (refresh_token) {
            const { result } = await this.MysqlService.execQuery(updateRefreshTokenQuery(), {
                user_id: nomalUser.id,
                refresh_token,
            });
            if (result === 'fail') {
                return { result: 'fail' };
            }
        }
        return { data: { access_token, refresh_token }, result: 'success' };
    }

    async oAuthLogin({ snsId, loginType }: oAuthLoginParamsItf) {
        const [user] = await this.MysqlService.getQuery<any[]>(oAuthUserQuery(), {
            snsId,
            loginType,
        });
        console.log(user, 'user');
        if (!user) {
            return { result: 'notFound_user' };
        }
        const tokenPayload = {
            id: user.id,
            user_email: user.user_email,
            user_name: user.user_nickname,
            login_type: user.login_type,
        };
        const access_token = await this.authService.createToken(tokenPayload);
        const refresh_token = await this.authService.createRefreshToken(tokenPayload);
        console.log(access_token, 'access_token');
        console.log(refresh_token, 'refresh_token');
        if (refresh_token) {
            const { result } = await this.MysqlService.execQuery(updateRefreshTokenQuery(), {
                user_id: user.id,
                refresh_token,
            });
            if (result === 'fail') {
                return { result: 'fail' };
            }
        }
        return { data: { access_token, refresh_token }, result: 'success' };
    }
}
