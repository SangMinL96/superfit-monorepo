import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Jwt } from "@src/_common/jwt/jwt";
import { JwtAuthGuard } from "@src/_common/jwt/jwt-auth.guard";
import { StaffCreateItf } from "@superfit/types/staff";
import { UserInfoItf } from "@superfit/types/user";
import { StaffService } from "./staff.service";
@Controller("/api/v1/staff")
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
    private jwtService: JwtService
  ) {
    // private readonly connectionService: MysqlService, // private readonly StaffService: StaffService,
  }

  @Get("/list")
  @UseGuards(JwtAuthGuard)
  async list(): Promise<any> {
    const result = await this.staffService.getStaff();
    return result;
  }
  @Post("/create")
  @UseGuards(JwtAuthGuard)
  async create(
    @Jwt() jwt: UserInfoItf,
    @Body() body: StaffCreateItf
  ): Promise<any> {
    const params = {
      ...body,
    };
    const result = await this.staffService.insertStaffCreate(params);
    return result;
  }
}
