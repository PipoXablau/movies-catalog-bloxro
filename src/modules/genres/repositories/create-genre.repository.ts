/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateGenreDto } from "../dto/create-genre.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CreateGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateGenreDto) {
        const genre = await this.prisma.genre.create({
            data,
        });
        return genre;
    }
}