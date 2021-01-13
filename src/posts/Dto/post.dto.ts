import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PostDto {
    @IsString()
    @ApiProperty({description:"Post's Title"})
    title: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"Post's Body"})
    body: string;
    
} 