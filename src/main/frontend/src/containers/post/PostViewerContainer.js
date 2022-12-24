import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/Post/PostViewer';
import loading from '../../modules/loading';
import { setOriginalPost } from '../../modules/write';
import { useParams } from 'react-router-dom';
import PostActionButtons from '../../components/Post/PostActionButtons';
import { removePost } from '../../lib/api/post';
const PostViewerContainer = () => {
	//처음 마운트 될 때 포스트 읽기 API 요청
	const { ID } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { post, error, loading } = useSelector(({ post, loading }) => ({
		post: post.post,
		error: post.error,
		loading: loading['post/READ_POST'],
	}));

	useEffect(() => {
		// console.log({ ID });
		dispatch(readPost(ID));
		//언마운트 될 때 리덕스에서 포스트 데이터 없애기
		return () => {
			dispatch(unloadPost());
		};
	}, [dispatch]);

	const onEdit = () => {
		dispatch(setOriginalPost(post));
		navigate('/write');
	};
	const onRemove = async () => {
		try {
			await removePost(ID);
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<PostViewer
			post={post}
			loading={loading}
			error={error}
			PostActionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
		/>
	);
};

export default PostViewerContainer;
