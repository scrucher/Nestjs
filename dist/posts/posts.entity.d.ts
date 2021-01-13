import { User } from "src/auth/users.entity";
import { BaseEntity } from "typeorm";
export declare class Posts extends BaseEntity {
    id: number;
    title: string;
    body: string;
    created_at: Date;
    user: User;
}
