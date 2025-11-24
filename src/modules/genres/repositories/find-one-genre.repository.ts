/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FindOneGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id:string) {
        const genre = await this.prisma.genre.findUnique({ where: { id } });
        return genre;
    }
}