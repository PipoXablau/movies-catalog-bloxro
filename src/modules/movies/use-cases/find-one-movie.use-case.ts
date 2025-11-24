/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneMovieRepository } from '../repositories';

@Injectable()
export class FindOneMovieUseCase {
    constructor(
        private readonly findonemovieRepository: FindOneMovieRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const movie = await this.findonemovieRepository.findone(id);
            this.logger.log("movie found successfully");
            if (!movie) return new NotFoundException("movie not found");
            return movie;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("movie not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}