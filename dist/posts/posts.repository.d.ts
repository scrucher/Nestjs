import { User } from "src/auth/users.entity";
import { Repository } from "typeorm";
import { FilterDto } from "./Dto/filter.dto";
import { PostDto } from "./Dto/post.dto";
import { Posts } from "./posts.entity";
export declare class PostsRepository extends Repository<Posts> {
    getAllPosts(filterDto: FilterDto): Promise<Posts[]>;
    createPost(postDto: PostDto, user: User): Promise<Posts>;
    getPost(id: string): Promise<Posts>;
    deletePost(id: string, user: User): Promise<void>;
}
