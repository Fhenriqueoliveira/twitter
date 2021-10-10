import {
  IsString,
  Length,
  IsNotEmpty,
  IsNumber,
  IsDate,
} from 'class-validator';

export class TweetDto {
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;

  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  User: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  likes: number[];

  @IsNotEmpty()
  @IsString()
  @Length(3, 300)
  text: string;
}
