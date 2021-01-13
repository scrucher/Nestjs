import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { SignInPayload } from './payload/signin.payload';
import { UserRepository } from './User.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ){}
    
    async signup (signUpDto: SignUpDto): Promise<void> {
        return this.userRepository.signUp(signUpDto);
    }

    async signin (signInDto: SignInDto): Promise <any>{
         const username = await this.userRepository.validateUserPassword(signInDto);
        if (!username) {
            throw new UnauthorizedException(
                'Something Went Wrong, Please Try Again.'
            );
        };
        const payload: SignInPayload = {username};
        const Access_token = await this.jwtService.sign(payload);
        return Access_token;
    }
}
