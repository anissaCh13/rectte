import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { CreateRecipeInput, Ingredient } from '../model/creat-recipe';
import { RecipeApi } from '../service/recipe-api';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipe-create-form',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatMiniFabButton,
    HttpClientModule
  ],
  providers: [RecipeApi],
  templateUrl: './recipe-create-form.html',
  styleUrl: './recipe-create-form.scss'
})
export class RecipeCreateForm {

  readonly #recipeApi = inject(RecipeApi);

  readonly formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    ingredients: new FormArray([] as FormGroup<{
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

  saveRecipe() {
    const data = {
      title: this.title.value!,
      description: this.description.value,
      ingredients: this.ingredients.value.map(({name, unit, quantity}) => ({name, unit, quantity}) satisfies Ingredient)
    } satisfies CreateRecipeInput;
    this.#recipeApi.creatNewRecipe(data).subscribe();
  }

}
