
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "@/src/app.module";
import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(AppModule);

  // 1. Global ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 2. Static Assets
  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set("trust proxy", true);

  // 3. Helmet Security
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "validator.swagger.io"],
          connectSrc: ["'self'"],
        },
      },
      crossOriginEmbedderPolicy: false,
    }),
  );

  // 4. HTTP Logger
  app.use(
    (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      const now = new Date()
        .toISOString()
        .replace("T", " ")
        .replace(/\..+/, "");

      console.log(
        `[HTTP] [${now}] ${req.method} ${req.originalUrl}`,
      );

      next();
    },
  );

  // 5. Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle("KDex API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  // 6. Cookie Parser
  const cookieSecret =
    process.env.COOKIE_SECRET ||
    "fallback-secret-dont-use-in-prod";

  app.use(cookieParser(cookieSecret));

  // 7. CORS Configuration
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS
        .split(",")
        .map((origin) => origin.trim())
    : [];

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    maxAge: 86400,
  });

  // 8. Start Server
  const port = Number(process.env.PORT) || 5001;

  await app.listen(port);

  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api`);
}

bootstrap();