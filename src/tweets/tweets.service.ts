import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Tweet, Prisma } from '.prisma/client';
import { PrismaService } from 'src/users/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private tw: PrismaService) {}
}
