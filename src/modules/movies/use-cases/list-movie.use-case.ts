/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListMovieRepository } from '../repositories/list-movie.repository';

@Injectable()
export class ListMovieUseCase {
    constructor(
        private readonly listMovieRepository: ListMovieRepository,
        private readonly logger: Logger,
    ) {}

    async listall(){
        try {
            const movie = await this.listMovieRepository.listall();
            this.logger.log("movie listed successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}