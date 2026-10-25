import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { User1Service } from "./user1.service";
import { CreateUser1Dto } from "./dto/user1.dto";


@Controller("user1")
export class User1Controller {
  constructor(private readonly userService: User1Service) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  
  @Post()
  async createUser(@Body() dto: CreateUser1Dto) {
    return await this.userService.createUser(dto);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() dto: CreateUser1Dto) {
    return await this.userService.updateUser(id, dto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return await this.userService.deleteUser(id);
  }
}
