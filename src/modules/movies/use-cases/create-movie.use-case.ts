/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { CreateMovieRepository } from '../repositories';

@Injectable()
export class CreateMovieUseCase {
  createmovieRepository: any;
  constructor(
    private readonly createMovieRepository: CreateMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateMovieDto) {
    try {
      const movie = await this.createMovieRepository.create(data);
      this.logger.log('movie created successfully');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
