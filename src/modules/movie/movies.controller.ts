import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.create(data);
  }

  @Patch(':id/favorite')
  toggleFavorite(@Param('id') id: string) {
    return this.moviesService.toggleFavorite(id);
  }
}