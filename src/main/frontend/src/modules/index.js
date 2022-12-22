import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
	write,
});

export function* rootSaga() {
	yield all([writeSaga()]);
}

export default rootReducer;
