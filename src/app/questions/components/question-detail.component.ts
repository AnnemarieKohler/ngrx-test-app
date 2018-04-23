import { Component, OnInit, Input } from '@angular/core';
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
    <div>
      <!-- <ul *ngFor="let question of questions$ | async">
        <li>{{ question.text }}</li>
      </ul> -->
      <h3>{{ question.text }}</h3>
      <ul *ngFor="let answer of question.answerOptions" class="list-group">
        <li class="list-group-item">
          <div class="form-check">
            <input class="form-check-input" type="radio" id="{{answer.id}}" [(ngModel)]="answer.id">
            <label class="form-check-label" for="exampleCheck1">{{ answer.text }}</label>
          </div>
        </li>
      </ul>
      <button (click)="submit()">Submit & Next</button>
    </div>
  `,
  styles: []
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  questions$: Observable<Question[]>;

  constructor(private store: Store<fromRoot.State>, public router: Router) {}

  ngOnInit() {}

  submit() {

  }

}
