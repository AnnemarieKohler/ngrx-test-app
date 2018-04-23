import { LevelActionTypes, LevelActions } from '../actions/level.actions';

// initial state
export const initialState = '';

// reducer
export function levelReducer(state = initialState, action: LevelActions): string {

  switch (action.type) {

    case LevelActionTypes.InitialiseLevel:
      return action.payload as string;

    default:
      return state;
  }
}
