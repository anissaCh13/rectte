import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Ingredient } from '../model/creat-recipe';
import { RecipeApi } from '../service/recipe-api';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeStore } from '../store/recipe.store';

@Component({
  selector: 'app-recipe-create-form',
  standalone: true,
  imports: [
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatMiniFabButton,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [RecipeApi],
  templateUrl: './recipe-create-form.html',
  styleUrl: './recipe-create-form.scss'
})
export class RecipeCreateForm {

  readonly #snackBar = inject(MatSnackBar);
  readonly #recipeStore = inject(RecipeStore);

  readonly formGroup = new FormGroup({
    title: new FormControl(this.#recipeStore.title(), [Validators.required]),
    description: new FormControl(this.#recipeStore.description()),
    ingredients: new FormArray(this.#recipeStore.ingredients() as FormGroup<{
      name: FormControl<string | null>;
      quantity: FormControl<number | null>;
      unit: FormControl<string | null>;
    }>[]),
  })

  get title() {
    return this.formGroup.controls.title
  }

  get description() {
    return this.formGroup.controls.description
  }

  get ingredients() {
    return this.formGroup.controls.ingredients
  }

  addIngredient() {
    const ingredientForm = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(0.0),
      unit: new FormControl(''),
    })

    this.ingredients.push(ingredientForm);
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  saveRecipe() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.#recipeStore.setTitle(this.title.value ?? '');
    this.#recipeStore.setDescription(this.description.value ?? '');
    this.#recipeStore.setIngredients(this.mapToIngredients(this.ingredients.value))

    this.#recipeStore.addNewRecipe().then(() => {
      this.#recipeStore.resetForm();
      this.#snackBar.open('creat success', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['success-snackbar']
      })
    }).catch(() => {
      this.#snackBar.open('creat error', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['error-snackbar']
      })
    })
  }

  private mapToIngredients(ingredientsValue: Partial<{
    name: string | null
    quantity: number | null
    unit: string | null
  }>[]) {
    return ingredientsValue.map(({name, unit, quantity}) =>
      ({name, unit, quantity}) satisfies Ingredient)

  }

}
