import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'questions', pathMatch: 'full'},
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule'
  },
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule'
  }
];

