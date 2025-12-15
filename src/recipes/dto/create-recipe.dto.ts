import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MinLength, ArrayMinSize } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'Tortilla de patatas',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  recipeName: string;

  @ApiProperty({
    example: 'Batir huevos y freír patatas...',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  recipePreparation: string;

  @ApiProperty({
    example: ['Huevos', 'Patatas', 'Aceite'],
    type: [String],
    minItems: 1,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  ingredients: string[];
}