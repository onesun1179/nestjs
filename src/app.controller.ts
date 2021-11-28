import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() test, @Request() req, @Query() q): string {
    console.log(test, q, q.test);

    return this.appService.getHello();
  }
  @Post()
  getHi(@Res() res: Response): void {
    res.status(HttpStatus.OK).send({
      test: '1',
    });
  }
}
