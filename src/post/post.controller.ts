import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('user/:userId')
  getPostsByUser(@Param('userId') userId: string): Post[] {
    return this.postService.findPostsByUser(Number(userId));
  }
}
