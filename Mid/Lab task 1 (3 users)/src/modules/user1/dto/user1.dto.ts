import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUser1Dto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateUser1Dto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  email: string = "";

  @IsOptional()
  password: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
