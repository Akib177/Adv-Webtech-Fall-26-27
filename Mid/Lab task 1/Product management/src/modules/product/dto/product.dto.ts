import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  category: string = "";

  @IsNotEmpty()
  price: number = 0;

  @IsNotEmpty()
  quantity: number = 0;
}

export class UpdateProductDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  category: string = "";

  @IsOptional()
  price: number = 0;

  @IsOptional()
  quantity: number = 0;
}