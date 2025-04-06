import { MysqlService } from '@common/DB/mysql.service';
import { JwtStrategy } from '@common/jwt/jwtStrategy';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SmtpService } from '@src/_common/SMTP/smtp.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, MysqlService, SmtpService, JwtService, JwtStrategy],
})
export class UserModule {}
