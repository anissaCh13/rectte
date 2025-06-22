import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "",
  loadComponent: ()=> import('./core/welcom/welcom').then(c=> c.Welcom)},
  {
    path: 'recipe',
    loadChildren: () => import('./domains/recipe/recipe.routes').then(m => m.RECIPE_ROUTES)
  },

];
