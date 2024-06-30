import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository extends UserRepository {
  constructor(private prisma: PrismaClient) {
    super();
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> {
    await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
  }
}
