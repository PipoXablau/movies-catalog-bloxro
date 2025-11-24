/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
@Injectable()
export class DeleteMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async delete(id:string) {
        const movie = await this.prisma.movie.delete({ where: { id } });
        return movie;
    }
}