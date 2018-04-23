import { QuestionQueueActionTypes, QuestionQueueActions } from '../actions/question-queue.actions';
import { Question } from '../models/question';

// initial state
export const initialState: Question[] = [];

// reducer
export function queueReducer(state = initialState, action: QuestionQueueActions): Question[] {
  switch (action.type) {

    case QuestionQueueActionTypes.InitialiseQueueSuccess:
      return action.payload as Question[];
    // case QuestionQueueActionTypes.GetCurrentQuestion:
    //   return [state[0]];
    default:
      return state;
  }
}

