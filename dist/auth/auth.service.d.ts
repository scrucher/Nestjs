import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { UserRepository } from './User.repository';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signup(signUpDto: SignUpDto): Promise<void>;
    signin(signInDto: SignInDto): Promise<any>;
}
