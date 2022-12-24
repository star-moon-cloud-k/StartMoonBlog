import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionsTypes } from './createRequestSaga';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [COMMENTS_READ, COMMENTS_POST_SUCCESS, COMMENTS_POST_FAILURE] =
	createRequestActionsTypes('comments/COMMENTS_READ');

// export const commentRead = createAction(LIST_POSTS, ({ tag, username, page }) => ({
// 	tag,
// 	username,
// 	page,
// }));

export const commentRead = createAction(COMMENTS_READ, ({ id }) => ({
	id,

	// level,
}));
const commentReadSaga = createRequestSaga(COMMENTS_READ, postAPI.readComment);
const initialState = {
	comments: null,
	error: null,
};
export function* ReadSaga() {
	yield takeLatest(COMMENTS_READ, commentReadSaga);
}
const postList = handleActions(
	{
		[COMMENTS_POST_SUCCESS]: (state, { payload: comments }) => ({
			...state,
			comments,
		}),
		[COMMENTS_POST_FAILURE]: (state, { payload: error }) => ({
			...state,
			error,
		}),
	},
	initialState,
);

export default postList;
