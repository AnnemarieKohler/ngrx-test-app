import { QuestionQueueActionTypes, QuestionQueueActions, UpdateCurrentScreen } from '../actions/question-queue.actions';
import { Question } from '../models/question';

interface State {
  questions: Question[];
  currentScreen: string;
}

// initial state
export const initialState: any = {
  questions: [],
  currentScreen: ''
};

// reducer
export function queueReducer(state = initialState, action: QuestionQueueActions): State {
  switch (action.type) {

    case QuestionQueueActionTypes.InitialisedQueueSuccess:
      const initialisedQueue = action.payload as Question[];
      return {...state, questions: initialisedQueue};

    case QuestionQueueActionTypes.AnswerCurrentQuestion:
      const firstQuestion = state.questions[0];
      const newQueue = state.questions.slice(1, state.length);
      const isCorrectAnswer = action.payload === firstQuestion.correctAnswers[0];
      const queue = isCorrectAnswer ? newQueue : [...newQueue, firstQuestion];
      return {...state, questions: queue};

    case QuestionQueueActionTypes.UpdateCurrentScreen:
      return {...state, currentScreen: action.payload};

    default:
      return state;
  }
}

