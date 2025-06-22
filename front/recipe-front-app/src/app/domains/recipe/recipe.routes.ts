import { Routes } from '@angular/router';
import { RecipeCreateForm } from './recipe-create-form/recipe-create-form';

export const RECIPE_ROUTES: Routes = [
  {
    path: 'create',
    component: RecipeCreateForm
  },
];
