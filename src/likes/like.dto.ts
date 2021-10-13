import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class LikeDto {
  @IsOptional()
  @IsNumber()
  tweetId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
