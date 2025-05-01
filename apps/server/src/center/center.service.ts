import { MysqlService } from "@common/DB/mysql.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CenterCreateItf } from "@superfit/types/center";
import { ExecResultItf } from "@superfit/types/fetcher";
import { insertCenterCreateQuery } from "./query";

@Injectable()
export class CenterService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService
  ) {
    //
  }

  async getClass() {
    // return snakeToCamel();
  }
  async insertCenterCreate(params: CenterCreateItf): Promise<ExecResultItf> {
    const result = await this.mysqlService.execQuery(
      insertCenterCreateQuery(),
      params
    );
    return result;
  }
}
