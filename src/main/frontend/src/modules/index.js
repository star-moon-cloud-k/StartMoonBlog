import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postListSaga } from './postList';
import comment, { CommentSaga } from './comment';
import comments, { ReadSaga } from './comments';
const rootReducer = combineReducers({
	loading,
	write,
	post,
	posts,
	comment,
	comments,
});

export function* rootSaga() {
	yield all([writeSaga(), postSaga(), postListSaga(), CommentSaga(), ReadSaga()]);
}

export default rootReducer;
