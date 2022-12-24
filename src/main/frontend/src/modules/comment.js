import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionsTypes } from './createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'COMMENT/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'COMMENT/CHANGE_FIELD'; //특정 key 값 바꾸기
const [COMMENT_POST, COMMENT_POST_SUCCESS, COMMENT_POST_FAILURE] =
	createRequestActionsTypes('COMMENT/COMMENT_POST'); //포스트 작성
const READ_COMMENT = 'COMMNET/READ_COMMENT';
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
	key,
	value,
}));
export const commentPost = createAction(COMMENT_POST, ({ postId, name, comment }) => ({
	postId,
	name,
	comment,
	// level,
}));
export const commentRead = createAction(READ_COMMENT, ({ id, name, comment }) => ({
	id,
	name,
	comment,
	// level,
}));
//사가 생성

const commentPostSaga = createRequestSaga(COMMENT_POST, postsAPI.postComment);

export function* CommentSaga() {
	yield takeLatest(COMMENT_POST, commentPostSaga);
}

const initialState = {
	id: '',
	postId: '',
	name: '',
	comment: '',
	level: '',
	commentError: null,
};

const comment = handleActions(
	{
		[INITIALIZE]: state => initialState, //initialState를 넣으면 초기 상태로 바뀜
		[CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
			...state,
			[key]: value, //특정 key 값을 업데이트
		}),
		[COMMENT_POST]: state => ({
			...state,
			//name 와 comment 초기화
			name: null,
			comment: null,
		}),
		//포스트 작성 성공
		[COMMENT_POST_SUCCESS]: (state, { payload: comment }) => ({
			...state,
			comment,
		}),
		//작성 실패
		[COMMENT_POST_FAILURE]: (state, { payload: commentError }) => ({
			...state,
			commentError,
		}),
	},
	initialState,
);

export default comment;
