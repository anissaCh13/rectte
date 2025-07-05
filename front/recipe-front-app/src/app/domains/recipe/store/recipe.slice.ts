import { Ingredient } from '../model/creat-recipe';

export interface RecipeSlice{
  readonly title: string;
  readonly description: string;
  readonly ingredients: Ingredient[];
  readonly instructions: string[];
}

export const INITIAL_RECIPE_SLICE: RecipeSlice={
  title: '',
  description: '',
  ingredients: [],
  instructions: []
}
