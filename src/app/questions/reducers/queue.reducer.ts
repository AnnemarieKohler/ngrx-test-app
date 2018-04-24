import { QuestionQueueActionTypes, QuestionQueueActions } from '../actions/question-queue.actions';
import { Question } from '../models/question';

// initial state
export const initialState: Question[] = [];

// reducer
export function queueReducer(state = initialState, action: QuestionQueueActions): Question[] {
  switch (action.type) {

    case QuestionQueueActionTypes.InitialiseQueueSuccess:
      return action.payload as Question[];
    case QuestionQueueActionTypes.AnswerCurrentQuestion:
      if (action.payload === state[0].correctAnswers[0]) {
        console.log('remove correct question from queue');
        return state.slice(1, state.length);
      } else {
        const firstQuestion = state[0];
        const newQueue = state.slice(1, state.length);

        return [...newQueue, firstQuestion];
      }
    default:
      return state;
  }
}

