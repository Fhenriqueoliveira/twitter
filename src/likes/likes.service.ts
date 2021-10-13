import { Injectable } from '@nestjs/common';
import { Like } from '@prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import { LikeDto } from './like.dto';

@Injectable()
export class LikesService {
  constructor(private db: PrismaService) {}

  async create(data: LikeDto): Promise<Like> {
    return this.db.like.create({
      data,
      include: {
        Tweet: true,
      },
    });
  }

  async delete(id: number): Promise<Like> {
    return this.db.like.delete({
      where: { id },
    });
  }
}
