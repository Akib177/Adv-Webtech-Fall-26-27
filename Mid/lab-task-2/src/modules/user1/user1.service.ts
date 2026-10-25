import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User1 } from "./entities/user1.entity";
import { Repository } from "typeorm";
import { CreateUser1Dto, UpdateUser1Dto } from "./dto/user1.dto";


@Injectable()
export class User1Service {
constructor(
  @InjectRepository(User1) private readonly userRepository: Repository<User1>,
) {}

async getUsers() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async createUser(dto: CreateUser1Dto) {
try{
  const response = await this.userRepository.create(dto as any);
  return await this.userRepository.save(response);
}
catch (error) {
  throw error;
}}

async updateUser(id: string, dto: UpdateUser1Dto) {
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