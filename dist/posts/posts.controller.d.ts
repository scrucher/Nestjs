import { User } from 'src/auth/users.entity';
import { FilterDto } from './Dto/filter.dto';
import { PostDto } from './Dto/post.dto';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(filterDto: FilterDto): Promise<Posts[]>;
    createPost(postDto: PostDto, user: User): Promise<Posts>;
    getPost(id: string): Promise<Posts>;
    deletePost(id: string, user: User): Promise<void>;
}
