import { User, Prisma } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class UsersService {
    private db;
    constructor(db: PrismaService);
    findUnique(username: string): Promise<User>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    deleteOneUser(username: string): Promise<User>;
    listAll(): Promise<User[]>;
}
