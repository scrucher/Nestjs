import { Strategy } from "passport-local";
import { UserRepository } from "./User.repository";
import { SignInPayload } from "./payload/signin.payload";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: SignInPayload): Promise<import("./users.entity").User>;
}
export {};
