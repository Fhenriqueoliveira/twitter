import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Tweet, Prisma } from '.prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TweetsService {
  constructor(private tw: PrismaService) {}

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.tw.tweet.create({ data });
  }

  async listall(): Promise<Tweet[]> {
    return this.tw.tweet.findMany();
  }
  async deleteTweet(id: number): Promise<Tweet> {
    return this.tw.tweet.delete({
      where: { id },
    });
  }
}
