import {Action} from '@ngrx/store';

export enum QuestionQueueActionTypes {
  AddQuestionToQueue = '[Question Queue] Add ',
  RemoveQuestionFromQueue = '[Question Queue] Remove ',
  AddQuestionToQueueError = '[Question Queue] Add Error',
  AddQuestionToQueueSuccess = '[Question Queue] Add Success',
}

export interface QuestionQueueAction extends Action {
  payload?: any;
}

export class AddQuestionToQueue implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.AddQuestionToQueue;

  constructor(public payload: any) {
  }
}

export class AddQuestionToQueueSuccess implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.AddQuestionToQueueError;

  constructor(public payload: any) {
  }
}

export class AddQuestionToQueueError implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.AddQuestionToQueueError;

  constructor(public payload: any) {
  }
}

export class RemoveQuestionFromQueue implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.RemoveQuestionFromQueue;

  constructor(public payload: any) {
  }
}

export type QuestionQueueActions = AddQuestionToQueue | RemoveQuestionFromQueue;
