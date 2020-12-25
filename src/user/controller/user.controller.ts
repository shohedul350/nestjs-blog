import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../models/userInterface';

@Controller('users')
export class UserController {
  constructor(private userServices: UserService) {}

  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userServices.create(user);
  }

  @Get('id')
  findOne(@Param() params): Observable<User> {
    return this.userServices.findOne(params.id);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userServices.findAl();
  }

  @Delete('id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.userServices.deleteOne(Number(id));
  }

  @Put('id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.userServices.updateOne(Number(id), user);
  }
}
