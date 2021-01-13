import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { GetUser } from './getuser.guard';
import { User } from './users.entity';

@Controller('auth')



export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('/signup')
    @ApiCreatedResponse({description:'User Have Been Created Successfully.'})
    @ApiForbiddenResponse({description:'User Havent Been Created Successfully.'})

    signUp (@Body() signUpDto: SignUpDto): Promise<void> {
        return this.authService.signup(signUpDto);
    }

    @Post('/signin')
    @ApiBearerAuth()
    @ApiCreatedResponse({description:'User Have Been Logged In Successfully.'})
    @ApiForbiddenResponse({description:'Forbidden.'})

    signIn (@Body() signInDto: SignInDto): Promise <any> {
        return this.authService.signin(signInDto);
    }


}
