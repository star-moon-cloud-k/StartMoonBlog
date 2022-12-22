import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
	margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
	/* 맨 위 포스트는 padding-top 없음*/
	& + :first-child {
		padding-top: 0;
	}
	& + & {
		border-top: 1px solid ${palette.gray[2]};
	}

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
	return (
		<PostItemBlock>
			<h2>
				<StyledLink to={`/post/${ID}`}>{TITLE}</StyledLink>
			</h2>
			<SubInfo username="starmooncloudk" publishedDate={new Date(PUBLISHEDDATE)} />
			{/* <Tags tags={tags} /> */}
			<p>{BODY}</p>
		</PostItemBlock>
	);
};

const PostList = ({ posts, loading, error }) => {
	if (error) {
		return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
	}
	return (
		<PostListBlock>
			<WritePostButtonWrapper>
				<Button cyan to="/write">
					새 글 작성하기
				</Button>
			</WritePostButtonWrapper>
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
