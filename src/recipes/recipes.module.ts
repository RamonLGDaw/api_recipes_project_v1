import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { Recipe, RecipeSchema } from './entities/recipe.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Recipe.name, schema: RecipeSchema },
    ]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
