import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/Post/PostViewer';
import loading from '../../modules/loading';
import { useParams } from 'react-router-dom';

const PostViewerContainer = () => {
	//처음 마운트 될 때 포스트 읽기 API 요청
	const { ID } = useParams();
	console.log({ ID });
	// const { postId } = match.params;
	const dispatch = useDispatch();
	const { post, error, loading } = useSelector(({ post, loading }) => ({
		post: post.post,
		error: post.error,
		loading: loading['post/READ_POST'],
	}));

	useEffect(() => {
		dispatch(readPost(ID));
		//언마운트 될 때 리덕스에서 포스트 데이터 없애기
		return () => {
			dispatch(unloadPost());
		};
	}, [dispatch, ID]);

	return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;
