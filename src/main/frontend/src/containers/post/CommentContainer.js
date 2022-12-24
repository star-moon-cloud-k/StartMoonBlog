import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/comment';
import { commentRead } from '../../modules/comments';
import CommentComponent from '../../components/Post/CommentComponent';
import { commentPost } from '../../modules/comment';
import { useNavigate } from 'react-router-dom';

const CommentContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { post, comment, comments, name } = useSelector(({ comment, post, comments }) => ({
		post: post.post,
		comment: comment.comment,
		comments: comments.comments,
		name: comment.name,
	}));

	const onPublish = () => {
		const postId = post.id;

		dispatch(
			commentPost({
				postId,
				comment,
				name,
			}),
		);

		window.location.reload();
	};
	//취소
	const onCancel = () => {
		navigate(-1);
	};

	const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
	//언마운트 될 때 초기화
	useEffect(() => {
		if (post) {
			console.log(post.id);
			const id = post.id;
			dispatch(commentRead({ id }));
		}
		return () => {
			dispatch(initialize());
		};
	}, [dispatch, post]);

	return (
		<CommentComponent
			onChangeField={onChangeField}
			post={post}
			comment={comment}
			comments={comments}
			onPublish={onPublish}
			onCancel={onCancel}
		/>
	);
};

export default CommentContainer;
