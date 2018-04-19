import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromCore from '../reducers/core.reducer';
import * as fromRoot from '../../reducers/index';

import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app',
  template: `
    <navbar (collection)="showCollection()"></navbar>
    <page-layout>
      <router-outlet></router-outlet>

      <snackbar *ngFor="let notification of notifications | async" [message]="notification"></snackbar>

    </page-layout>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  notifications: Observable<string[]>;
  loggedIn: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  ngOnInit() {
    this.loading = this.store.pipe(select(fromCore.getLoading));
    this.notifications = this.store.pipe(select(fromCore.getNotifications));
  }

  showCollection() {
    this.router.navigateByUrl('movies/collection');
  }

}
