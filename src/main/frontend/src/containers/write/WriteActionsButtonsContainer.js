import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/Post/WriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({
		title: write.title,
		body: write.body,
		tags: write.tags,
		post: write.post,
		postError: write.postError,
		originalPostId: write.originalPostId,
	}));

	const onPublish = () => {
		if (originalPostId) {
			dispatch(updatePost({ title, body, tags, id: originalPostId }));
			return;
		}
		dispatch(
			writePost({
				title,
				body,
				tags,
			}),
		);
	};
	//취소
	const onCancel = () => {
		navigate(-1);
	};

	useEffect(() => {
		if (post) {
			const { ID } = post;
			navigate(`/post/${ID}`);
		}
		if (postError) {
			console.log(postError);
		}
	}, [navigate, post, postError]);

	return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId} />;
};

export default WriteActionButtonsContainer;
