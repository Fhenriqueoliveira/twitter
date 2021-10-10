import { User, Prisma } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class UsersService {
    private db;
    constructor(db: PrismaService);
    listOne(username: string): Promise<User>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    deleteOneUser(username: string): Promise<User>;
    listAll(): Promise<User[]>;
    update(username: string, data: Prisma.UserCreateInput): Promise<User>;
}
