import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "",
  loadComponent: ()=> import('./core/welcome/welcome').then(c=> c.Welcome)},
  {
    path: 'recipe',
    loadChildren: () => import('./domains/recipe/recipe.routes').then(m => m.RECIPE_ROUTES)
  },

];
