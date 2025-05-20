import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PostService {
  private posts: Post[] = [
    { "id": 1, "userId": 1, "title": "Post 1", "body": "This is the body of Post 1" },
    { "id": 2, "userId": 1, "title": "Post 2", "body": "Details about Post 2 go here" },
    { "id": 3, "userId": 2, "title": "Post A", "body": "Post A body content" },
    { "id": 4, "userId": 3, "title": "Post X", "body": "Insights from Post X" },
    { "id": 5, "userId": 2, "title": "Post B", "body": "Follow-up to Post A" }
  ]

  findPostsByUser(userId: number): Post[] {
    return this.posts.filter(post => post.userId === userId);
  }
}
