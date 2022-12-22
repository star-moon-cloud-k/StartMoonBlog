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
