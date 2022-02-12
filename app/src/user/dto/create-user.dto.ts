import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly username: string;
  
    @IsString()
    readonly nickname: string;

    @IsString()
    readonly password: string;
  
    @IsString()
    readonly auth: string;
}
