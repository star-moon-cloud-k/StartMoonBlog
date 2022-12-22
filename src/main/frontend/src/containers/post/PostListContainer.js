import React, { useEffect } from 'react';
import qs from 'qs';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/Post/PostList';
import { listPosts } from '../../modules/postList';

const PostListContianer = () => {
	const { username } = useParams();
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	const { posts, error, loading } = useSelector(({ posts, loading }) => ({
		posts: posts.posts,
		error: posts.error,
		loading: loading['posts/LIST_POSTS'],
	}));

	useEffect(() => {
		const tag = searchParams.get('tag');

		const page = parseInt(searchParams.get('page'), 10) || 1;
		dispatch(listPosts({ tag, username, page }));
	}, [dispatch, searchParams, username]);
	return <PostList loading={loading} error={error} posts={posts} />;
};
export default PostListContianer;
