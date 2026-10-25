import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateUser2Dto } from "./dto/user2.dto";
import { User2Service } from "./user2.service";



@Controller("user2")
export class User2Controller {
  constructor(private readonly userService: User2Service) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  
  @Post()
  async createUser(@Body() dto: CreateUser2Dto) {
    return await this.userService.createUser(dto);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() dto: CreateUser2Dto) {
    return await this.userService.updateUser(id, dto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return await this.userService.deleteUser(id);
  }
}
