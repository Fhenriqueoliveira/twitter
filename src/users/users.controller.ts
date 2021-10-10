import {
  Body,
  Get,
  Post,
  Param,
  Controller,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

//@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':username')
  listOne(@Param('username') username: string): Promise<User> {
    return this.service.listOne(username);
  }
  @Post('/create-user')
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }
  @Delete('/del/:username')
  deleteOneUser(@Param('username') username: string): Promise<User> {
    return this.service.deleteOneUser(username);
  }
  @Get()
  listAll(): Promise<User[]> {
    return this.service.listAll();
  }
  @Put('/update/:username')
  update(
    @Param('username') username: string,
    @Body() updateUser: CreateUserDto,
  ): Promise<User> {
    return this.service.update(username, updateUser);
  }
}
