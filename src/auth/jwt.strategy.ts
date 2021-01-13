import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { ExtractJwt } from "passport-jwt";

import { UserRepository } from "./User.repository";
import { SignInPayload } from "./payload/signin.payload";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
    constructor( @InjectRepository(UserRepository)
    private userRepository: UserRepository,) {
        super({
            
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secret: 'topsecret51',
    });
}

    async validate (payload: SignInPayload){
        const {username} = payload;
        const user = await this.userRepository.findOne(username);
        if (!username) {
            throw new UnauthorizedException(
                'Something Went Wrong, Please Try Again'
            );
        };
        return user;
    }
}