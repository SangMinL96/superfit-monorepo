import { MysqlService } from '@common/DB/mysql.service';
import { JwtStrategy } from '@common/jwt/jwtStrategy';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, AuthService, JwtService, MysqlService, JwtStrategy],
})
export class LoginModule {}
