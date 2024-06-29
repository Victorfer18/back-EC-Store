import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getHello() {
    const result = await this.prisma.user.create({
      data: {
        email: 'victorfernandomagalhaes@gmail.com',
        name: 'Victor Magalhães',
        password: '123',
      },
    });

    return {
      message: 'Hello World!',
      result,
    };
  }
}
