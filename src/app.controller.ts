import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dtos/user-dto';
import { UserRepository } from './repositories/user-repository';

@Controller('/users')
export class AppController {
  constructor(private userService: UserRepository) {}

  @Post('/create')
  async getHello(@Body() body: UserDto) {
    const result = await this.userService.create({
      ...body,
    });

    return {
      message: 'Hello World!',
      result,
    };
  }
}
