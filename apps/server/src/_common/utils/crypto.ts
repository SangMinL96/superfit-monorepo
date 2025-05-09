import { InternalServerErrorException } from "@nestjs/common";
import { randomBytes, pbkdf2 } from "crypto";

export const createSalt = () =>
  new Promise((resolve, reject) => {
    randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
export const createHashedPassword = (plainPassword: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const salt = (await createSalt()) as any; // 소금 만들어서 대입
      pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
        if (err) reject(err);
        resolve({ password: key.toString("base64"), salt });
      });
    } catch (e) {
      throw new InternalServerErrorException("비밀번호 생성 실패");
    }
  });

export const getHashePassword = (plainPassword, salt) =>
  new Promise(async (resolve, reject) => {
    pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64") });
    });
  });
