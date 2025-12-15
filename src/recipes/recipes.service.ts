import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './entities/recipe.entity';
import { Model, Types } from 'mongoose';

const MAX_RECIPES = Number(process.env.MAX_RECIPES ?? 20);

@Injectable()
export class RecipesService {

  constructor(@InjectModel(Recipe.name) private readonly recipeModel: Model<Recipe>) { }

  async create(createRecipeDto: CreateRecipeDto) {
    const count = await this.recipeModel.countDocuments().exec();

    if (count >= MAX_RECIPES) {
      throw new ConflictException('Recipe limit reached.');
    }
    return this.recipeModel.create(createRecipeDto);
  }


  async findAll() {
    return this.recipeModel.find().exec();
  }


  async findOne(id: Types.ObjectId) {
    const recipe = await this.recipeModel.findById(id).exec();
    if (!recipe) { throw new NotFoundException(`Sorry... ${id} not found`) };
    return recipe;
  }


  async update(id: Types.ObjectId, updateRecipeDto: UpdateRecipeDto) {
    await this.findOne(id); // check if ID exists.
    return await this.recipeModel.findByIdAndUpdate(id, updateRecipeDto, { new: true });
  }


  async remove(id: Types.ObjectId) {
    await this.findOne(id); // check if ID exists.
    return this.recipeModel.findByIdAndDelete(id)
  }
}
