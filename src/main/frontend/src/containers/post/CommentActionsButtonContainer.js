import React, { useEffect } from 'react';
import CommentActionButtons from '../../components/Post/CommentActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { commentPost } from '../../modules/comment';

const CommentActionsButtonContainer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { post, comment, name } = useSelector(({ post, comment }) => ({
		post: post.post,
		comment: comment.comment,
		name: comment.name,
	}));

	const onPublish = () => {
		console.log(post['id']);
		const postId = post['id'];
		dispatch(
			commentPost({
				postId,
				comment,
				name,
			}),
		);
		navigate(`/post/${postId}`);
	};
	//취소
	const onCancel = () => {
		navigate(-1);
	};

	useEffect(() => {
		if (comment) {
			navigate(`/post/${post.id}`);
		}
	}, [navigate, comment]);

	return <CommentActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default CommentActionsButtonContainer;
