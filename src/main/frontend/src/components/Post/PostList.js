import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import dompurify from 'dompurify';
const PostListBlock = styled(Responsive)`
	margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
	background: #eeeeee;
	float: left;
	width: 60%;
`;

const PostItemBlock = styled.div`
	padding-top: 0rem;
	padding-bottom: 5rem;
	overflow: auto;
	float: left;
	width: 33%;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 0;
		margin-top: 0;
		&:hover {
			color: ${palette.gray[6]};
		}
	}
	p {
		margin-top: 1rem;
	}
`;
const StyledLink = styled(Link)`
	color: ${palette.gray[7]};
	font-size: 1.5rem;
	margin-bottom: 0;
	margin-top: 0;
	&:hover {
		color: ${palette.gray[6]};
	}
`;
const PostItem = ({ post }) => {
	const { PUBLISHEDDATE, TITLE, BODY, ID } = post;
	let b = { BODY };
	b = b.length < 200 ? b : b.BODY.slice(0, 200).concat('. . .');

	return (
		<PostItemBlock>
			<h2>
				<StyledLink to={`/post/${ID}`}>{TITLE}</StyledLink>
			</h2>
			<SubInfo username="starmooncloudk" publishedDate={new Date(PUBLISHEDDATE)} />
			{/* <Tags tags={tags} /> */}
			<p dangerouslySetInnerHTML={{ __html: b }} />
		</PostItemBlock>
	);
};

const PostList = ({ posts, loading, error }) => {
	if (error) {
		return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
	}

	return (
		<PostListBlock>
			{!loading && posts && (
				<>
					{posts.map(post => (
						<PostItem post={post} key={post.ID} />
					))}
				</>
			)}
		</PostListBlock>
	);
};

export default PostList;
