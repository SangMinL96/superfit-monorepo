import { MysqlService } from "@common/DB/mysql.service";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import snakeToCamel from "@src/_common/utils/snakeToCamel";
import { StaffCreateItf, getStaffItf } from "@superfit/types/staff";
import { ExecResultItf } from "@superfit/types/fetcher";
import {
  findByStaffNameQuery,
  getStaffCreateQuery,
  insertStaffCreateQuery,
} from "./query";

@Injectable()
export class StaffService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService
  ) {
    //
  }

  async getStaff() {
    const result = await this.mysqlService.getQuery<getStaffItf[]>(
      getStaffCreateQuery()
    );
    return snakeToCamel(result);
  }
  async insertStaffCreate(params: StaffCreateItf): Promise<ExecResultItf> {
    const get = await this.mysqlService.getQuery<getStaffItf[]>(
      findByStaffNameQuery(),
      params
    );
    if (get.length > 0) {
      throw new InternalServerErrorException("이미 존재하는 직원 입니다.");
    }
    const result = await this.mysqlService.execQuery(
      insertStaffCreateQuery(),
      params
    );
    return result;
  }
}
