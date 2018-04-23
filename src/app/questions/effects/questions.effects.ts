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
  AddQuestionToQueueError,
  InitialiseQueueError,
  InitialiseQueueSuccess
} from '../actions/question-queue.actions';
import { LevelActionTypes, LevelActions, InitialiseLevel } from '../actions/level.actions';

@Injectable()
export class QuestionsEffects {

  constructor(
    private actions$: Actions,
    private questionsService: QuestionsService,
    private router: Router) {}

  @Effect()
  initialiseQueue$ = this.actions$.pipe(
    ofType(QuestionQueueActionTypes.InitialiseQueue),
    map( (action: QuestionQueueActions) => action.payload),
    switchMap( (query: string) => {
      return this.questionsService.getQuestions(query).pipe(
        map((data) =>  new InitialiseQueueSuccess(data.questions),
        catchError(err => of(new InitialiseQueueError(err)))
      ));
    })
  );
}
