import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class LikeDto {
  @IsOptional()
  @IsString()
  Tweet: string;

  @IsOptional()
  @IsNumber()
  tweetId: number;

  @IsNotEmpty()
  @IsString()
  User: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
