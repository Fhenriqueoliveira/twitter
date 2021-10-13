import { Tweet, Prisma } from '.prisma/client';
import { PrismaService } from 'src/users/prisma.service';
export declare class TweetsService {
    private tw;
    constructor(tw: PrismaService);
    create(data: Prisma.TweetCreateInput): Promise<Tweet>;
    listall(): Promise<Tweet[]>;
    deleteTweet(id: number): Promise<Tweet>;
}
