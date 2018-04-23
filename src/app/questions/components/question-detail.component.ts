import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { AddQuestionToQueue, InitialiseQueue } from '../actions/question-queue.actions';
import { Observable } from 'rxjs';
import * as fromQuestions from '../reducers/questions.reducer';
import { Question } from '../models/question';

@Component({
  selector: 'question-detail',
  template: `
    <p>
      question works!
    </p>
    <button class="btn btn-primary" (click)="selectLevel()">easy</button>
    <br><br>
    <button class="btn btn-info" (click)="startTest()">start test</button>
    <ul *ngFor="let question of questions$ | async">
      <li>{{ question.text }}</li>
    </ul>
  `,
  styles: []
})
export class QuestionDetailComponent implements OnInit {
  questions$: Observable<Question[]>;

  constructor(private store: Store<fromRoot.State>, public router: Router) {}

  ngOnInit() {}

  selectLevel() {
    this.store.dispatch(new InitialiseQueue('easy'));
  }

  startTest() {
    this.questions$ = this.store.select(fromQuestions.getQuestionQueue);
  }

}
