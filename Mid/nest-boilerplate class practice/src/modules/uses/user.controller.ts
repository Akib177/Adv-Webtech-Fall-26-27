


import {Body, Controller, Delete, Get, Param, Post, Patch} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { patch } from 'axios';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    
@Get()
async getUsers(){
    return await this.userService.getUsers();
}    

@Post()
async createUser(@Body() dto: CreateUserDto){
    return await this.userService.createUser(dto);
}

@Patch(":id")
async updateUser(@Param("id") id: string, @Body() dto: UpdateUserDto){
    return await this.userService.updateUser(id, dto);
}

@Delete(":id")
async deleteUser(@Param("id") id: string){
    return await this.userService.deleteUser(id);
}

}