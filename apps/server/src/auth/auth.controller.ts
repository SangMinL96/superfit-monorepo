import { ExecResultItf } from '@superfit/types/fetcher';
import { oAuthSignupParamsItf, signupParamsItf } from '@superfit/types/auth';
import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SmtpService } from '@src/_common/SMTP/smtp.service';
import { AuthService } from './auth.service';

@Controller('/api/v1/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService,
        private smtpService: SmtpService,
    ) {
        // private readonly connectionService: MysqlService, // private readonly authService: AuthService,
    }
    @Post('hpAuthNum-send')
    async hpAuthNumSend(@Body() body: { hp: string }): Promise<ExecResultItf> {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        const params = {
            ...body,
            randomNum: String(randomNum),
        };
        const result = await this.authService.hpAuthNumberSend(params);
        return result;
    }
    @Post('authNum-check')
    async authNumCheck(@Body() body: { hp: string; authNum: string }): Promise<ExecResultItf> {
        const params = {
            ...body,
        };
        return await this.authService.hpAuthNumberCheck(params);
    }

    @Post('/sendMail')
    async sendMail(@Body() body: { email: string; authNum: string }): Promise<ExecResultItf> {
        const params = {
            ...body,
        };
        return await this.smtpService.emilAuthSMTP(params);
    }

    @Post('/user-signup')
    async userSignup(@Body() body: signupParamsItf): Promise<ExecResultItf> {
        const params = {
            ...body,
        };
        if (params.loginType === 'business') {
            return await this.authService.businessUserSignup(params);
        } else {
            return await this.authService.userSignup(params);
        }
    }

    @Post('/oauth/user-signup')
    async oauthUserSignup(@Body() body: oAuthSignupParamsItf): Promise<ExecResultItf> {
        const params = {
            ...body,
        };
        return await this.authService.oAuthUserSignup(params);
    }
    @Post('/naver-userinfo')
    async naverToken(@Body() body: { code: string; state: string }): Promise<ExecResultItf> {
        const params = {
            ...body,
        };
        const tokenRes = await fetch(
            `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&code=${params.code}&state=${params.state}`,
        );
        const { access_token } = (await tokenRes.json()) as any;
        if (access_token) {
            const infoRes = await fetch(`https://openapi.naver.com/v1/nid/me`, {
                headers: { Authorization: `Bearer ${access_token}` },
            });
            const info = (await infoRes.json()) as any;
            if (info.message === 'success') {
                return { result: 'success', data: info.response };
            } else {
                return { result: 'fail' };
            }
        } else {
            return { result: 'fail' };
        }
    }

    @Get('/testToken')
    async testToken(): Promise<any> {
        // const payload = {
        //   id: 59,
        //   user_email: 'hwon101@naver.com',
        //   user_name: '이상민',
        //   login_type: 'kakao',
        // };
        const payload = {
            id: 58,
            user_email: 'hwon101@naver.com',
            user_name: '위드필라테스',
            login_type: 'business',
            center_id: 1,
        };
        const token = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '3d',
            privateKey: process.env.JWT_SECRET,
        });
        return { token };
    }

    @Post('refresh-validate')
    async authRefreshToken(@Headers() Headers: any): Promise<ExecResultItf & { access_token }> {
        const clientRefreshToken = String(Headers.authorization).replace('Bearer ', '');
        try {
            const clientTokenInfo = await this.jwtService.verify(clientRefreshToken, {
                publicKey: process.env.JWT_SECRET,
            });
            const params = {
                name: clientTokenInfo.name,
                ent_code: clientTokenInfo.ent_code,
                cont_yn: clientTokenInfo.cont_yn,
                contact_yn: clientTokenInfo.contact_yn,
            } as any;
            const { refresh_token } = await this.authService.refreshTokenUser(params);
            const verified = (await this.jwtService.verify(refresh_token, {
                publicKey: process.env.JWT_SECRET,
            })) as any;
            if (params.name === verified.name && params.ent_code === verified.ent_code) {
                const access_token = await this.authService.createToken(params);

                return { result: 'success', access_token };
            } else {
                return { result: 'fail', access_token: '' };
            }
        } catch (err) {
            return { result: 'fail', access_token: '' };
        }
    }
}
