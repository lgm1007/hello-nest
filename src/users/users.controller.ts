import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../http-exception.filter';
import { PositiveIntPipe } from '../pipes/positive-int.pipe';

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
  getOneUser(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(typeof param);
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
