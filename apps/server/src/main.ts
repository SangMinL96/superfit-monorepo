import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const CORS_URL = process.env.CORS_URL.split("::");
  app.enableCors({ origin: '*', credentials: true });
  const port = process.env.PORT;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
}
bootstrap();
