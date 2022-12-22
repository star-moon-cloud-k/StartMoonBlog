import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postListSaga } from './postList';
const rootReducer = combineReducers({
	loading,
	write,
	post,
	posts,
});

export function* rootSaga() {
	yield all([writeSaga(), postSaga(), postListSaga()]);
}

export default rootReducer;
