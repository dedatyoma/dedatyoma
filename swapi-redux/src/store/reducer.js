import * as types from './types';

const initialState = {
  person: null,
  loading: false,
  error: null
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PERSON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload,
        error: null
      };
    case types.FETCH_PERSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        person: null
      };
    case types.CLEAR_PERSON_DATA:
      return initialState;
    default:
      return state;
  }
};
