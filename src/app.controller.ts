import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() test, @Request() req, @Query() q): string {
    console.log(test, q, q.test);

    return this.appService.getHello();
  }
  @Post()
  getHi(@Body() test): string {
    console.log('test', test);

    return this.appService.getHello();
  }
}
