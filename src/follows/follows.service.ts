import { Injectable } from '@nestjs/common';
import { Follow } from '@prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import { FollowDto } from './follow.dto';

@Injectable()
export class FollowsService {
  constructor(private db: PrismaService) {}

  async create(data: FollowDto): Promise<Follow> {
    return this.db.follow.create({
      data,
      include: {
        User: true,
      },
    });
  }

  async delete(id: number): Promise<Follow> {
    return this.db.follow.delete({
      where: { id },
    });
  }
}
