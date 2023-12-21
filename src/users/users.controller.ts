import {
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return 'get all users';
  }

  @Get('exception')
  getException() {
    throw new HttpException({ success: false, message: 'api is broken' }, 401);
  }

  @Get(':id')
  getOneUser(@Param() param) {
    return `get ${param} user`;
  }

  @Post()
  createUser() {
    return 'create one user';
  }

  @Put(':id')
  updateUser() {
    return 'update one user';
  }

  @Patch(':id')
  updatePartialUser() {
    return;
  }
}
