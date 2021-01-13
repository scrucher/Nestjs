import { Repository } from "typeorm";
import { User } from "./users.entity";
import { SignUpDto } from "./dto/signup.dto";
import { SignInDto } from "./dto/signin.dto";
export declare class UserRepository extends Repository<User> {
    signUp(signUpDto: SignUpDto): Promise<void>;
    getAllPosts(): Promise<void>;
    validateUserPassword(signInDto: SignInDto): Promise<string>;
    private hashpassword;
}
