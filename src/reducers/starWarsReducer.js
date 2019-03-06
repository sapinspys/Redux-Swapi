import { FETCHING, SUCCESS, FAILURE } from "../actions"

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload.results,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
        characters: [],
      }
    default:
      return state;
  }
};
