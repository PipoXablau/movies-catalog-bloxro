/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
@Injectable()
export class ListMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async listall(){
        const movie = await this.prisma.movie.findMany({

        });;
        if (!movie) {throw new NotFoundException("movie not found");}
        return movie;
    }
}