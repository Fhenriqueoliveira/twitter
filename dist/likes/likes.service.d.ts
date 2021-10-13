import { Like } from '@prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import { LikeDto } from './like.dto';
export declare class LikesService {
    private db;
    constructor(db: PrismaService);
    create(data: LikeDto): Promise<Like>;
    delete(id: number): Promise<Like>;
}
