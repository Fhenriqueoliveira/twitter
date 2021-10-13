import { Tweet } from '.prisma/client';
import {
  Body,
  Post,
  Get,
  Delete,
  Param,
  Controller,
  UseGuards,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { TweetDto } from './tweet.dto';
import { TweetsService } from './tweets.service';
import { AuthGuard } from '@nestjs/passport';

//@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(private service: TweetsService) {}

  @UsePipes(ValidationPipe)
  @Get('/listall')
  async findManyTweets(): Promise<Tweet[]> {
    return this.service.listall();
  }
  @UsePipes(ValidationPipe)
  @Post('/createtweet')
  create(@Body() data: TweetDto) {
    return this.service.create(data);
  }
  @UsePipes(ValidationPipe)
  @Delete('/deletetweet/:id')
  async delete(@Param('id') id: number) {
    return this.service.deleteTweet(id);
  }
}
