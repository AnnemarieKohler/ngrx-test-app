import {Action} from '@ngrx/store';

export enum QuestionQueueActionTypes {
  InitialiseQueue = '[Question Queue] Initialise Queue',
  InitialiseQueueSuccess = '[Question Queue] Initialise Queue Success',
  InitialiseQueueError = '[Question Queue] Initialise Queue Error',
  AddQuestionToQueue = '[Question Queue] Add Question',
  RemoveQuestionFromQueue = '[Question Queue] Remove Question',
  AddQuestionToQueueError = '[Question Queue] Add Question Error',
  AddQuestionToQueueSuccess = '[Question Queue] Add Question Success',
}

export interface QuestionQueueAction extends Action {
  payload?: any;
}

export class InitialiseQueue implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialiseQueue;

  constructor(public payload: any) {
  }
}

export class InitialiseQueueSuccess implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialiseQueueSuccess;

  constructor(public payload: any) {
  }
}

export class InitialiseQueueError implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialiseQueueError;

  constructor(public payload: any) {
  }
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

export type QuestionQueueActions = AddQuestionToQueue | AddQuestionToQueueError | AddQuestionToQueueSuccess |
 RemoveQuestionFromQueue | InitialiseQueue | InitialiseQueueSuccess | InitialiseQueueError;
