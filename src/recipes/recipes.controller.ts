import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ApiTags, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { Recipe } from './entities/recipe.entity';
import { Throttle } from '@nestjs/throttler';


@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) { }

  @ApiResponse({
    status: 201,
    description: 'Recipe created successfully',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        recipeName: {
          type: 'string',
          example: 'Tortilla de patatas',
        },
        recipePreparation: {
          type: 'string',
          example: 'Batir huevos, freír patatas y mezclar',
        },
        ingredients: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Huevos',
          },
        },
      },
    },
  })
  @Throttle({
    short: {
      limit: 3,
      ttl: 60,
    },
  })
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }



  @ApiResponse({
    status: 200,
    description: 'Recipe found',
    type: Recipe,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipe not found',
    type: Recipe,
  })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId of the recipe',
    type: String,
    example: '693f177b46e8ce21e0c01383',
  })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.recipesService.findOne(id);
  }


  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        recipeName: {
          type: 'string',
          example: 'Tortilla de patatas',
        },
        recipePreparation: {
          type: 'string',
          example: 'Actualizar preparación...',
        },
        ingredients: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Patatas',

          },

        },
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId of the recipe',
    type: String,
    example: '693f177b46e8ce21e0c01383',
  })
  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: Types.ObjectId, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }


  @ApiResponse({
    status: 200,
    description: 'Recipe deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Recipe not found',
  })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId of the recipe',
    type: String,
    example: '693f177b46e8ce21e0c01383',
  })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.recipesService.remove(id);
  }
}
