import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Posts } from "src/posts/posts.entity";


@Entity('user')
@Unique(['username'])


export class User extends BaseEntity {
    static posts(arg0: (type: any) => typeof User, posts: any, arg2: { eager: false; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @CreateDateColumn()
    Joined: Date;
    @Column()
    salt:string;

    @OneToMany(type=> Posts, posts=> posts.user, {eager: true})

    posts: Posts[];




    async validatePassword (password:string): Promise <boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
} 