import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { INITIAL_RECIPE_SLICE, RecipeSlice } from './recipe.slice';
import { CreateRecipeInput, Ingredient } from '../model/creat-recipe';
import { inject } from '@angular/core';
import { RecipeApi } from '../service/recipe-api';
import { lastValueFrom } from 'rxjs';

export const RecipeStore = signalStore(
  {providedIn: 'root' },
  withState<RecipeSlice>(INITIAL_RECIPE_SLICE),
  withMethods((store, recipeApi= inject(RecipeApi))=>({
    setTitle(title?: string): void{
      patchState(store, {title})
    },
    setDescription(description?: string): void{
      patchState(store, {description})
    },
    setIngredients(ingredients: Ingredient[]): void{
      patchState(store, {ingredients})
    },
    setInstructions(instructions: string[]): void{
      patchState(store, {instructions})
    },
    resetForm(): void{
      patchState(store, INITIAL_RECIPE_SLICE)
    },
    addNewRecipe(){
      const data = {
        title: store.title(),
        description: store.description(),
        ingredients: store.ingredients(),
        instruction: store.instructions()
      } satisfies CreateRecipeInput;
      return lastValueFrom(recipeApi.createNewRecipe(data))
    }
  }))
)
