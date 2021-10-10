import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class FollowDto {
  @IsOptional()
  @IsString()
  user: string;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  followedId: number;
}
