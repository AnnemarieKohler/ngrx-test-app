import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as forRoot from '../../reducers';
import * as fromRoot from '../../reducers';

import * as fromQuestions from '../reducers/questions.reducer';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { GetCurrentQuestion, AnswerCurrentQuestion, InitialiseQueue } from '../actions/question-queue.actions';

@Component({
  selector: 'questions',
  template: `
    <h1>My test</h1>
    <div *ngIf="!showTest && !showFinished">
      <select-level (onLevelSelected)="onLevelSelected($event)"></select-level>
      <hr>
      <button class="btn btn-info" (click)="startTest()" [disabled]="!canStartTest">start test</button>
    </div>
    <hr>
    <question-detail *ngIf="showTest" [question]="question$ | async" (onSubmitted)="onSubmitted($event)"></question-detail>
    <questions-finished *ngIf="showFinished"></questions-finished>
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {
  question$: Observable<any>;
  showTest: boolean;
  showFinished: boolean;
  canStartTest: boolean;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {}

  startTest() {
    if (!this.canStartTest) return;
    this.showTest = true;
    this.store.dispatch(new GetCurrentQuestion());
    this.question$ = this.store.select(fromQuestions.getCurrentQuestion);
  }

  onLevelSelected(level) {
    this.store.dispatch(new InitialiseQueue(level));
    this.canStartTest = true;
  }

  onSubmitted(answerId) {
    this.store.dispatch(new AnswerCurrentQuestion(answerId));
    const getIsQuestionQueueFinished$ = this.store.select(fromQuestions.getIsQuestionQueueFinished);
    getIsQuestionQueueFinished$.subscribe((f) => {
      if (f === true) {
        this.showFinished = true;
        this.showTest = false;
      }
    });
  }

}
