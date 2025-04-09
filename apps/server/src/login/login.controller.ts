import { MysqlService } from '@common/DB/mysql.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginParamsItf, oAuthLoginParamsItf } from '@superfit/types/login';
import { UserInfoItf } from '@superfit/types/user';

import { LoginService } from './login.service';
import { getUserQuery } from './query';

@Controller('/api/v1/login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly mysqlService: MysqlService,
  ) { }

  @Get('/getUser')
  async getUser(): Promise<UserInfoItf[]> {
    const result = await this.mysqlService.getQuery<UserInfoItf[]>(getUserQuery(), {
      id: 'co_sl_s312',
    });

    return result;
  }

  @Post('phoneLogin')
  async phoneLogin(@Body() body: LoginParamsItf) {
    const params = {
      ...body,
    };
    const result = await this.loginService.phoneLogin(params);
    return result;
  }
  @Post('oAuthLogin')
  async oAuthLogin(@Body() body: oAuthLoginParamsItf) {
    const params = {
      ...body,
    };
    const result = await this.loginService.oAuthLogin(params);
    return result;
  }
}
