import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Unique } from "typeorm";


export class SignUpDto {
    @IsString ()
    @MinLength(4)
    @MaxLength(32)
    @ApiProperty({description:"User's Name"})
    name: string;
    @IsString ()
    @MinLength(2)
    @MaxLength(32)
    @ApiProperty({description:"User's Username"})
    username: string;
    @IsString ()
    @MinLength(8)
    @MaxLength(32)
    @ApiProperty({description:"User's Password"})
    password: string;
}