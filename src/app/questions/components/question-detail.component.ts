import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

      <ul class="list-group">
        <li *ngFor="let answer of question.answerOptions" class="list-group-item">
          <div class="form-check">
            <input class="form-check-input" type="radio" (click)="select(answer.id)" name="answer">
            <label class="form-check-label">{{ answer.text }}</label>
          </div>
        </li>
      </ul>
      <br><br>
      <button (click)="submit()">Submit & Next</button>
    </div>
  `,
  styles: []
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  @Output() onSubmitted = new EventEmitter<any>();
  selectedAnswer: string;


  constructor(private store: Store<fromRoot.State>, public router: Router) {}

  ngOnInit() {
    console.log('this question', this.question);
  }

  select(answer) {
    this.selectedAnswer = answer;
  }

  submit() {
    this.onSubmitted.emit(this.selectedAnswer);
  }

}
