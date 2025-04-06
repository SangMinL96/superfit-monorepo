import { UserInfoItf } from '@superfit/types/user';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SmtpService } from '@src/_common/SMTP/smtp.service';
import { Jwt } from '@src/_common/jwt/jwt';
import { JwtAuthGuard } from '@src/_common/jwt/jwt-auth.guard';
import { UserService } from './user.service';
@Controller('/api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    private smtpService: SmtpService,
  ) {
    // private readonly connectionService: MysqlService, // private readonly userService: userService,
  }
  @Get('/info')
  @UseGuards(JwtAuthGuard)
  async authNumCheck(@Jwt() jwt: UserInfoItf): Promise<any> {
    const params = {
      ...jwt,
    };
    const info = await this.userService.userInfo(params);
    return info;
  }
}
