import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Jwt } from "@src/_common/jwt/jwt";
import { JwtAuthGuard } from "@src/_common/jwt/jwt-auth.guard";
import { CenterCreateItf } from "@superfit/types/center";
import { UserInfoItf } from "@superfit/types/user";
import { CenterService } from "./center.service";
import { randomCode } from "@src/_common/jwt/utils";
@Controller("/api/v1/center")
export class CenterController {
  constructor(
    private readonly centerService: CenterService,
    private jwtService: JwtService
  ) {
    // private readonly connectionService: MysqlService, // private readonly CenterService: CenterService,
  }

  @Get("/enter/code")
  @UseGuards(JwtAuthGuard)
  async enterCode(@Jwt() jwt: UserInfoItf): Promise<any> {
    const result = await this.centerService.getEnterCode({
      centerId: jwt.center_id,
    });
    return result;
  }
  @Post("/create")
  @UseGuards(JwtAuthGuard)
  async create(
    @Jwt() jwt: UserInfoItf,
    @Body() body: CenterCreateItf
  ): Promise<any> {
    const params = {
      ...body,
      userUuid: jwt.user_uuid,
      centerEnterCode: randomCode(),
    } as CenterCreateItf;
    const { data } = await this.centerService.insertCenterCreate(params);
    const result = await this.centerService.updateUserCenterId({
      userUuid: params.userUuid,
      centerId: data.insertId,
    });

    return result;
  }
}
