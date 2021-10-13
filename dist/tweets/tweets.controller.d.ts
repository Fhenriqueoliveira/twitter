import { Tweet } from '.prisma/client';
import { TweetDto } from './tweet.dto';
import { TweetsService } from './tweets.service';
export declare class TweetsController {
    private service;
    constructor(service: TweetsService);
    findManyTweets(): Promise<Tweet[]>;
    create(data: TweetDto): Promise<Tweet>;
    deleteTweet(id: number): Promise<Tweet>;
}
