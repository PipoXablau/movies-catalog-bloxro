/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UpdateGenreDto } from "../dto/update-genre.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UpdateGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async update(id:string, data: UpdateGenreDto) {
        const genre = await this.prisma.genre.update({
            where: { id },
            data
        });
        return genre;
    }
}