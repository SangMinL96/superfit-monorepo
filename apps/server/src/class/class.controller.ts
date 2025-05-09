import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Jwt } from "@src/_common/jwt/jwt";
import { JwtAuthGuard } from "@src/_common/jwt/jwt-auth.guard";
import { ClassCreateItf } from "@superfit/types/class";
import { UserInfoItf } from "@superfit/types/user";
import { ClassService } from "./class.service";
@Controller("/api/v1/class")
export class ClassController {
  constructor(
    private readonly classService: ClassService,
    private jwtService: JwtService
  ) {
    // private readonly connectionService: MysqlService, // private readonly ClassService: ClassService,
  }

  @Get("/list")
  @UseGuards(JwtAuthGuard)
  async list(): Promise<any> {
    const result = await this.classService.getClass();
    return result;
  }
  @Post("/create")
  @UseGuards(JwtAuthGuard)
  async create(
    @Jwt() jwt: UserInfoItf,
    @Body() body: ClassCreateItf
  ): Promise<any> {
    const params = {
      ...body,
    };
    const result = await this.classService.insertClassCreate(params);
    return result;
  }
}
