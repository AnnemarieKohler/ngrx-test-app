import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as forRoot from '../../reducers';
import * as fromRoot from '../../reducers';

import * as fromQuestions from '../reducers/questions.reducer';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { AnswerCurrentQuestion, InitialiseQueue, UpdateCurrentScreen } from '../actions/question-queue.actions';

@Component({
  selector: 'questions',
  template: `
    <h1>My test</h1>
    <div *ngIf="currentScreen == 'level-selector'">
      <select-level (onLevelSelected)="onLevelSelected($event)"></select-level>
      <hr>
      <button class="btn btn-info" (click)="startTest()" [disabled]="!canStartTest">start test</button>
    </div>
    <hr>
    <question-detail *ngIf="currentScreen == 'questions'"
     [question]="question$ | async" (onSubmitted)="onSubmitted($event)"></question-detail>
    <questions-finished *ngIf="currentScreen == 'questions-finished'"></questions-finished>
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {
  question$: Observable<any>;
  currentScreen;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store
      .select(fromQuestions.getCurrentScreen)
      .subscribe(screen => this.currentScreen = screen);
    this.store.dispatch(new UpdateCurrentScreen('level-selector'));
  }

  onLevelSelected(level) {
    this.store.dispatch(new InitialiseQueue(level));
  }

  startTest() {
    this.store.dispatch(new UpdateCurrentScreen('questions'));
    this.question$ = this.store.select(fromQuestions.getCurrentQuestion);
  }

  onSubmitted(answerId) {
    this.store.dispatch(new AnswerCurrentQuestion(answerId));
    this.store
      .select(fromQuestions.getIsQuestionQueueFinished)
      .subscribe((f) => {
        if (f === true)
        this.store.dispatch(new UpdateCurrentScreen('questions-finished'));
      });
  }

}
