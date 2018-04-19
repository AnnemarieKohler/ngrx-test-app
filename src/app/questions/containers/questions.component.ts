import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as forRoot from '../../reducers';
import * as fromQuestions from '../reducers/questions.reducer';

@Component({
  selector: 'questions',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {


  ngOnInit() {
  }

}
