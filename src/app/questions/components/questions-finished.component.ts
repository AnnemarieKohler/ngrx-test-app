import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { InitialiseQueue } from '../actions/question-queue.actions';
import { Observable } from 'rxjs';
import * as fromQuestions from '../reducers/questions.reducer';
import { Question } from '../models/question';

@Component({
  selector: 'questions-finished',
  template: `
    <div>
    <h1>Well done! You've passed with flying colours!!</h1>
    <img src="https://media.giphy.com/media/vkbRTscWVQoZG/giphy.gif">
    </div>
  `,
  styles: []
})
export class QuestionsFinishedComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>, public router: Router) { }

  ngOnInit() {}

}
