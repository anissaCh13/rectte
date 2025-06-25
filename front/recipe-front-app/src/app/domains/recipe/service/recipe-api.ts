import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRecipeInput } from '../model/creat-recipe';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeApi {

  readonly #httpClient = inject(HttpClient);

  createNewRecipe(input: CreateRecipeInput): Observable<any> {
    return this.#httpClient.post('api/recipes', input).pipe(
      catchError(error => {
        console.error('Failed to create recipe:', error);
        return throwError(() => error);
      })
    );
  }
}
