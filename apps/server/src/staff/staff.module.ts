import { MysqlService } from "@common/DB/mysql.service";
import { JwtStrategy } from "@common/jwt/jwtStrategy";
import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SmtpService } from "@src/_common/SMTP/smtp.service";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";

@Module({
  imports: [],
  controllers: [StaffController],
  providers: [StaffService, MysqlService, SmtpService, JwtService, JwtStrategy],
})
export class StaffModule {}
