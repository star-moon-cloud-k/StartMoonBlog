import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionsTypes } from './createRequestSaga';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POSTS, LIST_POST_SUCCESS, LIST_POST_FAILURE] =
	createRequestActionsTypes('posts/LIST_POST');

export const listPosts = createAction(LIST_POSTS, ({ tag, username, page }) => ({
	tag,
	username,
	page,
}));

const listPostsSaga = createRequestSaga(LIST_POSTS, postAPI.listPosts);
export function* postListSaga() {
	yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
	posts: null,
	error: null,
};

const postList = handleActions(
	{
		[LIST_POST_SUCCESS]: (state, { payload: posts }) => ({
			...state,
			posts,
		}),
		[LIST_POST_FAILURE]: (state, { payload: error }) => ({
			...state,
			error,
		}),
	},
	initialState,
);

export default postList;
