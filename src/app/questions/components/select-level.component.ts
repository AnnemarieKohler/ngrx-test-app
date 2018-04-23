import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { AddQuestionToQueue, InitialiseQueue } from '../actions/question-queue.actions';
import { Observable } from 'rxjs';
import * as fromQuestions from '../reducers/questions.reducer';
import { Question } from '../models/question';

@Component({
  selector: 'select-level',
  template: `
    <h2>Choose your difficulty level</h2>
    <button class="btn btn-success" (click)="selectLevel()">easy</button>
    <button class="btn btn-warning" (click)="selectLevel()">hard</button>
  `,
  styles: []
})
export class SelectLevelComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>, public router: Router) { }

  ngOnInit() { }

  selectLevel() {
    this.store.dispatch(new InitialiseQueue('easy'));
  }

}
