import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { InitialiseQueue } from '../actions/question-queue.actions';
import { Observable } from 'rxjs';
import * as fromQuestions from '../reducers/questions.reducer';
import { Question } from '../models/question';

@Component({
  selector: 'select-level',
  template: `
    <h2>Choose your difficulty level</h2>
    <button class="btn btn-success" (click)="select('easy')">easy</button>
    <button class="btn btn-warning" (click)="select('hard')">hard</button>
  `,
  styles: []
})
export class SelectLevelComponent implements OnInit {
  @Output() onLevelSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  select(level) {
    this.onLevelSelected.emit(level);
  }
}
