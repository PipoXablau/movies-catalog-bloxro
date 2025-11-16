import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.genre.findMany();
  }

  async create(name: string) {
    return this.prisma.genre.create({
      data: { name },
    });
  }
}