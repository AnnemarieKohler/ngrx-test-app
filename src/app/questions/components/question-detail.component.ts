import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { AddQuestionToQueue } from '../actions/question-queue.actions';
import { Observable } from 'rxjs';
import * as fromQuestions from '../reducers/questions.reducer';

@Component({
  selector: 'question-detail',
  template: `
    <p>
      question works!
    </p>

    <ul *ngFor="let question of questions$">
      <li>{{ question }}</li>
    </ul>
  `,
  styles: []
})
export class QuestionDetailComponent implements OnInit {
  questions$: Observable<any>;

  constructor(private store: Store<fromRoot.State>, public router: Router) {}

  ngOnInit() {
    this.store.dispatch(new AddQuestionToQueue('easy'));
    this.questions$ = this.store.pipe(select(fromQuestions.getQuestionQueue));
  }

}
