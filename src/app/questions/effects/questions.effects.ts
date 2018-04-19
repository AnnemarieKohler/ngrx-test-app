import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs/index';
import {Router} from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import {
  QuestionQueueActionTypes,
  QuestionQueueActions,
  AddQuestionToQueue,
  AddQuestionToQueueSuccess,
  AddQuestionToQueueError
} from '../actions/question-queue.actions';

@Injectable()
export class QuestionsEffects {

  @Effect()
  effect$ = this.actions$.pipe(
    ofType(QuestionQueueActionTypes.AddQuestionToQueue),
    map( (action: QuestionQueueActions) => {
      console.log(action.payload);
      return action.payload;
    }),
    switchMap( query => {
      console.log('query', query);
      return this.questions.getQuestions(query).pipe(
        map((questions) => new AddQuestionToQueueSuccess(questions)),
        catchError(err => of(new AddQuestionToQueueError(err)))
      );
    })
  );

  constructor(private actions$: Actions, private questions: QuestionsService, private router: Router) {
  }
}
