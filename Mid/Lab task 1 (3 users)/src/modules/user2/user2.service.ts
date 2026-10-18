import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User2 } from "./entities/user2.entity";
import { CreateUser2Dto, UpdateUser2Dto } from "./dto/user2.dto";


@Injectable()
export class User2Service {
constructor(
  @InjectRepository(User2) private readonly userRepository: Repository<User2>,
) {}

async getUsers() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async createUser(dto: CreateUser2Dto) {
try{
  const response = await this.userRepository.create(dto as any);
  return await this.userRepository.save(response);
}
catch (error) {
  throw error;
}}

async updateUser(id: string, dto: UpdateUser2Dto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("User with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });
    if (!user) {
      throw new NotFoundException("User with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid, ...rest}=user;
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteUser(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("User with ID not found");  
}
return await this.userRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}