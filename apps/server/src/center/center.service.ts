import { MysqlService } from "@common/DB/mysql.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CenterCreateItf } from "@superfit/types/center";
import { ExecResultItf } from "@superfit/types/fetcher";
import {
  getEnterCode,
  insertCenterCreateQuery,
  updateUserCenterQuery,
} from "./query";

@Injectable()
export class CenterService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService
  ) {
    //
  }

  async getEnterCode(params: { centerId: number }): Promise<string> {
    const result = await this.mysqlService.getQuery(getEnterCode(), params);
    return result?.[0]?.center_enter_code || "";
  }
  async insertCenterCreate(params: CenterCreateItf): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      insertCenterCreateQuery(),
      params
    );
    return result;
  }
  async updateUserCenterId(params: {
    userUuid: string;
    centerId: number;
  }): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      updateUserCenterQuery(),
      params
    );
    return result;
  }
}
