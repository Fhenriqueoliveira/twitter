import { Follow } from '@prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import { FollowDto } from './follow.dto';
export declare class FollowsService {
    private db;
    constructor(db: PrismaService);
    create(data: FollowDto): Promise<Follow>;
    delete(id: number): Promise<Follow>;
}
