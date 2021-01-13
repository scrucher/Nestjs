import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/auth/users.entity';
import { FilterDto } from './Dto/filter.dto';
import { PostDto } from './Dto/post.dto';
import { Posts } from './posts.entity';
import { GetUser } from '../auth/getuser.guard';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';




@Controller('posts')
@ApiTags('Posts')
export class PostsController {

    constructor (private readonly postsService: PostsService) {}
    @Get()
    @ApiCreatedResponse()
    @ApiForbiddenResponse()
    getAllPosts (@Body()filterDto: FilterDto,
    ):Promise<Posts[]> {
        return this.postsService.getAllPosts(filterDto,);
    }

    @Post()
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    @ApiCreatedResponse({description:'Post Have Been Created Successfully.'})
    @ApiForbiddenResponse({description:'Post Havent Been Created Successfully.'})
    createPost (@Body() postDto: PostDto,
    @GetUser() user: User,
    ): Promise <Posts> {
        return this.postsService.createPost(postDto,user);
    }

    @Get('/:id')
    @ApiCreatedResponse()
    @ApiForbiddenResponse()
    getPost(@Param()id: string): Promise <Posts> {
        return this.postsService.getPost(id);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    @ApiCreatedResponse({description:'Post Have Been Deleted Successfully.'})
    @ApiForbiddenResponse({description:'Post Havent Been Deleted.'})
    deletePost(@Param()id: string,
    @GetUser()user: User
    ): Promise <void> {
        return this.postsService.deletePost(id,user);
    }
}
