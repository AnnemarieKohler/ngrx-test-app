import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as forRoot from '../../reducers';
import * as fromRoot from '../../reducers';

import * as fromQuestions from '../reducers/questions.reducer';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { GetCurrentQuestion } from '../actions/question-queue.actions';

@Component({
  selector: 'questions',
  template: `
    <h1>My test</h1>
    <select-level></select-level>
    <hr>
    <button class="btn btn-info" (click)="startTest()">start test</button>
    <hr>
    <question-detail [question]="question$ | async"></question-detail>
    <!-- <next-question></next-question> -->
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]>;
  question$: Observable<Question[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {}

  startTest() {
    this.store.dispatch(new GetCurrentQuestion());
    this.question$ = this.store.select(fromQuestions.getCurrentQuestion);
  }

}
