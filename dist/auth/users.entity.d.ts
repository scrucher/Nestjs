import { BaseEntity } from "typeorm";
import { Posts } from "src/posts/posts.entity";
export declare class User extends BaseEntity {
    static posts(arg0: (type: any) => typeof User, posts: any, arg2: {
        eager: false;
    }): void;
    id: number;
    name: string;
    username: string;
    password: string;
    Joined: Date;
    salt: string;
    posts: Posts[];
    validatePassword(password: string): Promise<boolean>;
}
