import * as dotEnv from 'dotenv';
//env 환경 설정
const result = dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
if (result.error) {
  throw result.error;
}
