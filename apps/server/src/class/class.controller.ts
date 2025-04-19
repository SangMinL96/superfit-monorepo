import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SmtpService } from "@src/_common/SMTP/smtp.service";
import { JwtAuthGuard } from "@src/_common/jwt/jwt-auth.guard";
import { ClassCreateItf } from "@superfit/types/class";
import { ClassService } from "./class.service";
import { UserInfoItf } from "@superfit/types/user";
import { Jwt } from "@src/_common/jwt/jwt";
@Controller("/api/v1/class")
export class ClassController {
  constructor(
    private readonly classService: ClassService,
    private jwtService: JwtService
  ) {
    // private readonly connectionService: MysqlService, // private readonly ClassService: ClassService,
  }
  @Post("/create")
  @UseGuards(JwtAuthGuard)
  async authNumCheck(
    @Jwt() jwt: UserInfoItf,
    @Body() body: ClassCreateItf
  ): Promise<any> {
    console.log(jwt);
    const params = {
      ...body,
    };
    const result = await this.classService.insertClassCreate(params);
    return result;
  }
}
