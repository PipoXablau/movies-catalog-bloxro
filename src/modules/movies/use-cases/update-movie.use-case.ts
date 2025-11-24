/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Logger } from "@nestjs/common/services/logger.service";
import { UpdateMovieRepository } from "../repositories/update-movie.repository";


@Injectable()
export class UpdateMovieUseCase {
    execute(id: string, data: UpdateMovieDto) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly updateMovieRepository: UpdateMovieRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateMovieDto) {
        try {
            const movie = await this.updateMovieRepository.update(id,data);
            this.logger.log("movie updated successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}