import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // The layout component with header and footer
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/pokemonlist/pokemonlist.component').then(
            (m) => m.PokemonlistComponent
          ),
      },
      {
        path: 'details/:name',
        loadComponent: () =>
          import('./features/pokemon-detail/pokemon-detail.component').then(
            (m) => m.PokemonDetailComponent
          ),
      }
      // Other lazy-loaded routes can go here
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
