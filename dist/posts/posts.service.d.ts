import { User } from 'src/auth/users.entity';
import { FilterDto } from './Dto/filter.dto';
import { PostDto } from './Dto/post.dto';
import { Posts } from './posts.entity';
import { PostsRepository } from './posts.repository';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: PostsRepository);
    getAllPosts(filterDto: FilterDto): Promise<Posts[]>;
    createPost(postDto: PostDto, user: User): Promise<Posts>;
    getPost(id: string): Promise<Posts>;
    deletePost(id: string, user: User): Promise<void>;
}
