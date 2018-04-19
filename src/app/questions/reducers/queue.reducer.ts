import { QuestionQueueActionTypes, QuestionQueueActions } from '../actions/question-queue.actions';
import { Question } from '../models/question';

// initial state
export const initialState: Question[] = [];

// reducer
export function queueReducer(state = initialState, action: QuestionQueueActions): Question[] {

  switch (action.type) {

    case QuestionQueueActionTypes.AddQuestionToQueue:
      return action.payload as Question[];

    default:
      return state;
  }
}

