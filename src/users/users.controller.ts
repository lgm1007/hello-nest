import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters, UseInterceptors
} from "@nestjs/common";
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../common/exception/http-exception.filter';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';
import { SuccessInterceptor } from "../common/interceptor/success.interceptor";

@Controller('users')
@UseInterceptors(SuccessInterceptor)
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
    console.log(param);
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
