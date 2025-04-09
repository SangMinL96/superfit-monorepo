import { MysqlService } from '@common/DB/mysql.service';
import { JwtStrategy } from '@common/jwt/jwtStrategy';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SmtpService } from '@src/_common/SMTP/smtp.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, MysqlService, SmtpService, JwtService, JwtStrategy],
})
export class AuthModule {}
