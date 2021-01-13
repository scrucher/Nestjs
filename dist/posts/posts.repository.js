"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("../auth/users.entity");
const typeorm_1 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
let PostsRepository = class PostsRepository extends typeorm_1.Repository {
    async getAllPosts(filterDto) {
        const { search } = filterDto;
        const querry = this.createQueryBuilder('posts');
        if (search) {
            querry.andWhere('post.title LIKE :search OR posts.body Like :search', { search: '%${search}$%' });
        }
        ;
        const posts = querry.getMany();
        return posts;
    }
    async createPost(postDto, user) {
        const { title, body } = postDto;
        const post = new posts_entity_1.Posts();
        post.title = title,
            post.body = body,
            post.user = user,
            post.save();
        if (!post) {
            throw new common_1.InternalServerErrorException('Please Try Again.');
        }
        return post;
    }
    async getPost(id) {
        const found = await this.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException('Post Not Found !');
        }
        ;
        return found;
    }
    async deletePost(id, user) {
        const deletePost = await this.delete(id);
        if (!deletePost.affected) {
            throw new common_1.NotFoundException('Post Not Found !');
        }
        ;
    }
};
PostsRepository = __decorate([
    typeorm_1.EntityRepository(posts_entity_1.Posts)
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map