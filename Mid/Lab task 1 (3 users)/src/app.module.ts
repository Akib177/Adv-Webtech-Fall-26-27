import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { UserModule } from "./modules/user/user.module";
import { User1Module } from "./modules/user1/user1.module";
import { User2Module } from "./modules/user2/user2.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    UserModule,
    User1Module,
    User2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
