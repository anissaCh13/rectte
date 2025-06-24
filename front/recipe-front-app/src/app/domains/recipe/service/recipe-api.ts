import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRecipeInput } from '../model/creat-recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeApi {

  readonly #httpClient = inject(HttpClient);

  creatNewRecipe(input: CreateRecipeInput) {
    return this.#httpClient.post('api/recipes', input);
  }
}
