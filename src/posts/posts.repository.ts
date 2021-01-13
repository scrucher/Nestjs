import { InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/users.entity";
import { EntityRepository, Repository } from "typeorm";
import { FilterDto } from "./Dto/filter.dto";
import { PostDto } from "./Dto/post.dto";
import { Posts } from "./posts.entity";




@EntityRepository(Posts)

export class PostsRepository extends Repository <Posts> {
    async getAllPosts (filterDto: FilterDto): Promise <Posts[]> {
        const {search} = filterDto;
        const querry = this.createQueryBuilder('posts');
        if (search) {
            querry.andWhere ('post.title LIKE :search OR posts.body Like :search', {search: '%${search}$%'});
        };
        const posts = querry.getMany();
        return posts;

    }

    async createPost (postDto: PostDto, user: User): Promise<Posts> {
        const {title, body} = postDto;
        const post = new Posts();
        post.title= title,
        post.body= body,
        post.user = user,
        post.save();
        
        if(!post){ 
            throw new InternalServerErrorException(
                'Please Try Again.'
            );
        }
        return post;
    }

    async getPost (id: string): Promise <Posts> {
        const found = await this.findOne(id);
        if (!found) {
            throw new NotFoundException(
                'Post Not Found !'
            );
        };
        return found
    }

    async deletePost (id:string, user: User): Promise<void> {
        const deletePost = await this.delete(id);

        if (!deletePost.affected) {
            throw new NotFoundException(
                'Post Not Found !'

            );
        };
    }

}