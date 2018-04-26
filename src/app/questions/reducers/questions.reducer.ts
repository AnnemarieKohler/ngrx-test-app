import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {Question} from '../models/question';
import {queueReducer} from './queue.reducer';

export interface State {
  questionQueue: {
    questions: Question[],
    currentScreen: string
  };
}

export const reducers: ActionReducerMap<State> = {
    questionQueue: queueReducer
};

const getQuestions = createFeatureSelector<State>('test');

export const getQuestionQueue = createSelector(
  getQuestions,
  test => test.questionQueue
  );

export const getCurrentQuestion = createSelector(
  getQuestions,
  test => test.questionQueue.questions[0]
  );

export const getIsQuestionQueueFinished = createSelector(
  getQuestions,
  test => test.questionQueue.questions.length === 0
  );

export const getCurrentScreen = createSelector(
  getQuestions,
  test => test.questionQueue.currentScreen
  );
