import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {Question} from '../models/question';
import {queueReducer} from './queue.reducer';

export interface State {
  questionQueue: Question[];
}

export const reducers: ActionReducerMap<State> = {
    questionQueue: queueReducer
};

const getQuestions = createFeatureSelector<State>('questions');

export const getQuestionQueue = createSelector(
  getQuestions,
  questions => questions.questionQueue
  );
