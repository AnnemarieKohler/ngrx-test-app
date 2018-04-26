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
      const firstQuestion: Question = state.questions[0];
      const newQueue = state.questions.slice(1, state.length);
      // const isCorrectAnswer = action.payload === firstQuestion.correctAnswers;
      const isCorrectAnswer = action.payload === firstQuestion.correctAnswers;
      // const queue = isCorrectAnswer ? newQueue : [...newQueue, firstQuestion];
      // const queue = answerCurrentQuestion(state.questions, action.payload);
      let queue;
      if (isCorrectAnswer) {
        console.log('corr');
        queue = newQueue;
      } else {
        queue = [...newQueue, firstQuestion];
        console.log('----------');
        console.log('wrong', action.payload[0], firstQuestion.correctAnswers[0], action.payload[0] === firstQuestion.correctAnswers[0]);
        console.log('----------');
      }

      return {...state, questions: queue};

    case QuestionQueueActionTypes.UpdateCurrentScreen:
      return {...state, currentScreen: action.payload};

    default:
      return state;
  }
}

function isEqual(arr1, arr2): boolean {
  if (arr1.length !== arr2.length) return false;

  const a = [...arr1].sort();
  const b = [...arr2].sort();

  
}

function answerCurrentQuestion(questions: Question[], submittedAnswer: string[]) {
  const firstQuestion = questions[0];
  const newQueue = questions.slice(1, length);
  const isCorrectAnswer = submittedAnswer === firstQuestion.correctAnswers;

  // const queue = isCorrectAnswer ? newQueue : [...newQueue, firstQuestion];
  if (isCorrectAnswer) {
    console.log('corr');
    return newQueue;
  } else {
    console.log('wrong');
    return [...newQueue, firstQuestion];
  }
  // return queue;
}

