import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({ timestamps: true })
export class Recipe extends Document {

  @Prop({ required: true })
  recipeName: string;

  @Prop({ required: true })
  recipePreparation: string;

  @Prop({ required: true, minLength: 1 })
  ingredients: string[];

  createdAt: Date;
  updatedAt: Date;

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);