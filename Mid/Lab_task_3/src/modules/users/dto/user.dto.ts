
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
  IsInt,
  IsIn,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty({ message: "Full name is mandatory" })
  full_name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    {
      message:
        "Password must contain uppercase, lowercase, number and special character",
    },
  )
  password!: string;

  @IsString()
  @IsIn(["student", "teacher"])
  account_type!: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits and begin with 01",
  })
  phone!: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    {
      message:
        "Password must contain uppercase, lowercase, number and special character",
    },
  )
  password?: string;

  @IsOptional()
  @IsString()
  @IsIn(["student", "teacher"])
  account_type?: string;

  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(60)
  age?: number;

  @IsOptional()
  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits and begin with 01",
  })
  phone?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}