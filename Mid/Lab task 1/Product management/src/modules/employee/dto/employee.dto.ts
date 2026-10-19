import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  age: number = 0;

  @IsOptional()
  yearsOfWorking?: number;
}

export class UpdateEmployeeDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  age: number = 0;

  @IsOptional()
  yearsOfWorking?: number;
}