import { FollowDto } from './follow.dto';
import { FollowsService } from './follows.service';
export declare class FollowsController {
    private service;
    constructor(service: FollowsService);
    create(follow: FollowDto): Promise<import(".prisma/client").Follow>;
    delete(id: number): Promise<import(".prisma/client").Follow>;
}
