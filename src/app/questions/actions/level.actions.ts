import { Action } from '@ngrx/store';

export enum LevelActionTypes {
  InitialiseLevel = '[Level] Initialise Level'
}

export interface LevelAction extends Action {
  payload?: any;
}

export class InitialiseLevel implements LevelAction {
  readonly type = LevelActionTypes.InitialiseLevel;

  constructor(public payload: any) {
  }
}

export type LevelActions = InitialiseLevel;
