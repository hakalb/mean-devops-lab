import { Controller, Get, Post } from '@nestjs/common';
import { Todo } from '@mean-devops-lab/data';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData(): Todo[] {
    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo(): Todo[] {
    this.appService.addTodo();
    return this.appService.getData();
  }
}
