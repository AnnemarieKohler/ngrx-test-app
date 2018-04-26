import {Action} from '@ngrx/store';

export enum QuestionQueueActionTypes {
  InitialiseQueue = '[Question Queue] Initialise Queue',
  InitialisedQueueSuccess = '[Question Queue] Initialised Queue Success',
  InitialisedQueueError = '[Question Queue] Initialised Queue Error',
  UpdateCurrentScreen = '[Question Queue] Update Current Screen',
  AnswerCurrentQuestion = '[Question Queue] Answer Current Question'
}

export interface QuestionQueueAction extends Action {
  payload?: any;
}

export class InitialiseQueue implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialiseQueue;

  constructor(public payload: any) {
  }
}

export class InitialisedQueueSuccess implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialisedQueueSuccess;

  constructor(public payload: any) {
  }
}

export class InitialisedQueueError implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.InitialisedQueueError;

  constructor(public payload: any) {
  }
}

export class AnswerCurrentQuestion implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.AnswerCurrentQuestion;

  constructor(public payload: any) {}
}

export class UpdateCurrentScreen implements QuestionQueueAction {
  readonly type = QuestionQueueActionTypes.UpdateCurrentScreen;

  constructor(public payload: any) {
  }
}


export type QuestionQueueActions = InitialiseQueue | InitialisedQueueSuccess |
  InitialisedQueueError | AnswerCurrentQuestion | UpdateCurrentScreen;
