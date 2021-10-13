import { Module } from '@nestjs/common';
import { FollowsController } from './follows.controller';
import { FollowsService } from './follows.service';
import { PrismaService } from 'src/users/prisma.service';

@Module({
  controllers: [FollowsController],
  providers: [FollowsService, PrismaService],
})
export class FollowsModule {}
