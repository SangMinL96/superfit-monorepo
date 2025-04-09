import { MysqlService } from '@common/DB/mysql.service';
import { ExecResultItf } from '@superfit/types/fetcher';
import { UserInfoItf } from '@superfit/types/user';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInfoQuery } from './query';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService, private readonly mysqlService: MysqlService) {
    //
  }
  async userInfo(params: UserInfoItf): Promise<ExecResultItf> {
    const [user] = await this.mysqlService.getQuery<any[]>(userInfoQuery(), params);
    return user;
  }
}
