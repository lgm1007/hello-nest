import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:id/:name')
  getHelloInApp(@Req() req: Request, @Param() param): string {
    console.log(req);
    console.log(param);
    return 'hello world';
  }
}
