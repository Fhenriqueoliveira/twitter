import {
  IsString,
  Length,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class TweetDto {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 300)
  text: string;
}
