import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class FollowDto {
  @IsOptional()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  followedId: number;
}
