import { EntityRepository, Repository } from "typeorm";
import { User } from "./users.entity";
import * as bcrypt from 'bcrypt';
import { SignUpDto } from "./dto/signup.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { SignInDto } from "./dto/signin.dto";



@EntityRepository(User)

export class UserRepository extends Repository<User> {

    async signUp (signUpDto: SignUpDto): Promise <void> {
        const {name, username,password}= signUpDto;
        const user = new User();
        user.username= username;
        user.name= name;
        user.salt= await bcrypt.genSalt();
        user.password= await this.hashpassword(password,user.salt);
        try {
            await user.save();
    }
    catch (error) { if (error.code=== 2305) {
        throw new ConflictException(
            'Username Already Token.'
        );
    }
    else {
        throw new InternalServerErrorException(
            'Please Try Again !'
        );
    }
  }
}

    async getAllPosts () {}

    async validateUserPassword (signInDto: SignInDto):Promise <string>{
        const {username, password} = signInDto;
        const user = await this.findOne({username});
        if (user && await user.validatePassword(password)) {
            return user.username;
        }
        else {
            return null;
        }
    }





    private async hashpassword (password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }
    
}