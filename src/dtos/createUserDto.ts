import { IsString, IsNotEmpty, IsLowercase, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsLowercase()
    @MaxLength(100)
    identifier: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    password: string;
}