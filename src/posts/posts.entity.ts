import { User } from "src/auth/users.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'posts'})
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    body: string;
    @CreateDateColumn()
    created_at: Date;
    @ManyToOne(type=> User, user => user.posts, {eager: false} )
    user:User;
    
}