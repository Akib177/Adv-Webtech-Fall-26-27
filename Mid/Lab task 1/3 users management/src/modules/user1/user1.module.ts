import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User1 } from "@/src/modules/user1/entities/user1.entity";
import { User1Controller } from "./user1.controller";
import { User1Service } from "./user1.service";


@Module({
  imports: [TypeOrmModule.forFeature([User1])],
  controllers: [User1Controller],
  providers: [User1Service],
  exports: [User1Service],
})
export class User1Module {}