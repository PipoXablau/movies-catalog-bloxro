/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DeleteMovieRepository } from '../repositories';

@Injectable()
export class DeleteMovieUseCase {
    constructor(
        private readonly deletemovieRepository: DeleteMovieRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id:string) {
        try {
            const movie = await this.deletemovieRepository.delete(id);
            this.logger.log("movie deleted successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}