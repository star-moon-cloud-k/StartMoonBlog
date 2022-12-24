import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionsTypes } from './createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
	createRequestActionsTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST'; //포스트 페이지에서 벗어날 때 데이터 비우기
// const READ_POST_ID = 'post/READ_POST_ID';
// export const readPostId = createAction(READ_POST_ID);
export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);
export const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
	yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
	post: null,
	error: null,
};

const post = handleActions(
	{
		[READ_POST_SUCCESS]: (state, { payload: post }) => ({
			...state,
			post,
		}),
		[READ_POST_FAILURE]: (state, { payload: error }) => ({
			...state,
			error,
		}),
		[UNLOAD_POST]: () => initialState,
	},
	initialState,
);

export default post;
