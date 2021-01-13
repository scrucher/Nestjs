import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
     AuthModule,
    TypeOrmModule.forFeature([PostsRepository]),
  ],
  providers: [PostsService,],
  controllers: [PostsController]
})
export class PostsModule {}
