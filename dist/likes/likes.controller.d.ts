import { LikeDto } from './like.dto';
import { LikesService } from './likes.service';
export declare class LikesController {
    private service;
    constructor(service: LikesService);
    create(addLike: LikeDto): Promise<import(".prisma/client").Like>;
    delete(id: number): Promise<import(".prisma/client").Like>;
}
