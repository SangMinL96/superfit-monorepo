import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const CORS_URL = process.env.CORS_URL.split("::");
  app.enableCors({
    origin: (origin, callback) => {
      callback(null, true); // 모든 origin 허용 (주의: production 환경에서는 안 됨)
    },
    credentials: true,
  });
  const port = process.env.PORT;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
}
bootstrap();
