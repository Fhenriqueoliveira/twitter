import {
  IsString,
  Length,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsEmail,
} from 'class-validator';
import { Prisma } from '.prisma/client';

export class CreateUserDto {
  @IsOptional()
  createAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  tweets: Prisma.TweetCreateNestedManyWithoutUserInput;

  @IsOptional()
  follows: Prisma.FollowCreateNestedManyWithoutUserInput;

  @IsOptional()
  likes: Prisma.LikeCreateNestedManyWithoutTweetInput;

  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  password: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsNotEmpty()
  @IsString()
  birth: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 300)
  bio: string;
}
