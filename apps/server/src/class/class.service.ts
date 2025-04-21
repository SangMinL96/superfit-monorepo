import { MysqlService } from "@common/DB/mysql.service";
import { ExecResultItf } from "@superfit/types/fetcher";
import { ClassCreateItf, getClassItf } from "@superfit/types/class";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
  findByClassNameQuery,
  getClassCreateQuery,
  insertClassCreateQuery,
} from "./query";
import snakeToCamel from "@src/_common/utils/snakeToCamel";

@Injectable()
export class ClassService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService
  ) {
    //
  }

  async getClass() {
    const result = await this.mysqlService.getQuery<getClassItf[]>(
      getClassCreateQuery()
    );
    return snakeToCamel(result);
  }
  async insertClassCreate(params: ClassCreateItf): Promise<ExecResultItf> {
    const get = await this.mysqlService.getQuery<getClassItf[]>(
      findByClassNameQuery(),
      params
    );
    if (get.length > 0) {
      throw new InternalServerErrorException("이미 존재하는 수업 입니다.");
    }
    const result = await this.mysqlService.execQuery(
      insertClassCreateQuery(),
      params
    );
    return result;
  }
}
