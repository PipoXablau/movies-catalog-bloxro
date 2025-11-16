import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.movie.findMany({
      include: { genre: true },
    });
  }

  async create(data: CreateMovieDto) {
    return this.prisma.movie.create({ data });
  }

  async toggleFavorite(id: string) {
    const movie = await this.prisma.movie.findUnique({
      where: { id },
    });

    if (!movie) throw new Error('Filme não encontrado');

    return this.prisma.movie.update({
      where: { id },
      data: { isFavorite: !movie.isFavorite },
    });
  }
}