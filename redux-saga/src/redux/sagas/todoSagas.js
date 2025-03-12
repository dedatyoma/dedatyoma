import { call, put, takeEvery, all } from 'redux-saga/effects';
import { LOAD_TODOS, loadTodos } from '../actions/todoActions';

function* fetchTodos() {
  try {
    const response = yield call(fetch, '/api/todos');
    const data = yield response.json();
    yield put(loadTodos(data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

function* watchLoadTodos() {
  yield takeEvery(LOAD_TODOS, fetchTodos);
}

export default function* rootSaga() {
  yield all([
    watchLoadTodos(),
  ]);
}