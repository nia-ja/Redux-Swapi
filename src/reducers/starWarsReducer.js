import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: null,
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        error: null,
        fetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};