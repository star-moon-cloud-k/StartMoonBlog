import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, tags }) => client.post('/api/post', { title, body, tags });
export const readPost = id => client.get(`/api/post`, { params: { id: id } });
export const listPosts = ({ page, tag }) => {
	const queryString = qs.stringify({
		page,
		tag,
	});
	return client.get(`/api/posts?${queryString}`);
};

export const postComment = ({ postId, name, comment }) => {
	client.post(`/api/comment`, { postId, name, comment });
};

export const updatePost = ({ id, title, body, tags }) => {
	client.patch(`/api/posts/${id}`, {
		title,
		body,
		tags,
	});
};
export const removePost = id => client.delete(`/api/post?id=${id}`);

export const readComment = ({ id }) => {
	const queryString = qs.stringify({
		id,
	});
	return client.get(`/api/comments?${queryString}`);
};
