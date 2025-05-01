import { MysqlService } from "@common/DB/mysql.service";
import { JwtStrategy } from "@common/jwt/jwtStrategy";
import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SmtpService } from "@src/_common/SMTP/smtp.service";
import { CenterController } from "./center.controller";
import { CenterService } from "./center.service";

@Module({
  imports: [],
  controllers: [CenterController],
  providers: [
    CenterService,
    MysqlService,
    SmtpService,
    JwtService,
    JwtStrategy,
  ],
})
export class CenterModule {}
