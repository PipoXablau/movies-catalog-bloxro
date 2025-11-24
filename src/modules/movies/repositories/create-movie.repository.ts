/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CreateMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMovieDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const movie = await this.prisma.movie.create({
      data,
    });
    return movie;
  }
}