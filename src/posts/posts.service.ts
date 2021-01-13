import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/users.entity';
import { FilterDto } from './Dto/filter.dto';
import { PostDto } from './Dto/post.dto';
import { Posts } from './posts.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor (
        @InjectRepository(PostsRepository)
        private postsRepository: PostsRepository,
    ) {}
    async getAllPosts (filterDto: FilterDto): Promise<Posts[]> {
        return this.postsRepository.getAllPosts(filterDto);
    }

    async createPost (postDto: PostDto, user: User): Promise <Posts> {
        return this.postsRepository.createPost(postDto,user);

    }

    async getPost (id: string): Promise<Posts> {
        return this.postsRepository.getPost(id);
    }
    async deletePost (id:string, user: User): Promise<void> {
        return this.postsRepository.deletePost(id, user);
    }
}
