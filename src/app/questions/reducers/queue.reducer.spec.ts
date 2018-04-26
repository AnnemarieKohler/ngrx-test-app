import { queueReducer } from './queue.reducer';
import { Question } from '../models/question';
import { QuestionQueueActionTypes, InitialisedQueueSuccess, AnswerCurrentQuestion } from '../actions/question-queue.actions';

describe('queueReducer', () => {
  let question1: Question, question2: Question, questions: Question[];
  let initialState;

  beforeEach(() => {
    question1 = {
      id: '00001',
      text: 'text',
      answerOptions: [ { id: '00001-1', text: 'abc' }, { id: '00001-2', text: 'def' }, { id: '00001-3', text: 'ghi' } ],
      correctAnswers: ['00001-2']
    };

    question2 = {
      id: '00002',
      text: 'text',
      answerOptions: [ { id: '00002-1', text: 'jkl' }, { id: '00002-2', text: 'mno' }, { id: '00002-3', text: 'pqr' } ],
      correctAnswers: ['00002-3']
    };

    questions = [question1, question2];
    initialState = { questions: [], currentScreen: '' };
  });

  it('returns initialised queue when initialised queue success action has been dispatched', () => {
    const newState = { questions: questions, currentScreen: ''};
    const action = new InitialisedQueueSuccess(questions);

    expect( queueReducer(initialState, action) ).toEqual(newState);
  });

  fit('remove first question of queue if answer was correct and returns new state', () => {
    const state = { questions: questions, currentScreen: '' };
    const action = new AnswerCurrentQuestion(['00001-2']);
    const newState = { questions: [question2], currentScreen: '' };
    console.log('test', newState);
    expect( queueReducer(state, action) ).toBe(newState);
  });
});
