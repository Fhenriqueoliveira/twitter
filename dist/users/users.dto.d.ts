import { Prisma } from '.prisma/client';
export declare class CreateUserDto {
    createAt: Date;
    updatedAt: Date;
    tweets: Prisma.TweetCreateNestedManyWithoutUserInput;
    follows: Prisma.FollowCreateNestedManyWithoutUserInput;
    likes: Prisma.LikeCreateNestedManyWithoutTweetInput;
    username: string;
    email: string;
    img: string;
    password: string;
    displayName: string;
    birth: string;
    bio: string;
}
