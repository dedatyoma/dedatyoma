import * as types from './types';

export const fetchPersonRequest = () => ({
  type: types.FETCH_PERSON_REQUEST
});

export const fetchPersonSuccess = (data) => ({
  type: types.FETCH_PERSON_SUCCESS,
  payload: data
});

export const fetchPersonFailure = (error) => ({
  type: types.FETCH_PERSON_FAILURE,
  payload: error
});

export const clearPersonData = () => ({
  type: types.CLEAR_PERSON_DATA
});

// Thunk action
export const fetchPerson = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPersonRequest());
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      dispatch(fetchPersonSuccess(data));
    } catch (error) {
      dispatch(fetchPersonFailure(error.message));
    }
  };
};