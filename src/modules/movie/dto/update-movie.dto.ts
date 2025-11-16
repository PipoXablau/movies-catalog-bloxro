import { IsBoolean } from 'class-validator';

export class UpdateMovieDto {
  @IsBoolean()
  isFavorite: boolean;
}