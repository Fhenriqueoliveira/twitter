import { User } from '.prisma/client';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    listOne(username: string): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    deleteOneUser(username: string): Promise<User>;
    listAll(): Promise<User[]>;
    update(username: string, updateUser: CreateUserDto): Promise<User>;
}
