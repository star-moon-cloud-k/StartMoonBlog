import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
	margin-top: 0.5rem;
	.tag {
		display: inline-block;
		color: #0649a8;
		text-decoration: none;
		margin-right: 0.5rem;

		&:hover {
			color: #0283bf;
		}
	}
`;

const Tags = ({ tags }) => {
	return (
		<TagsBlock>
			{tags &&
				tags.map(tag => (
					<Link className="tag" to={`/?tag=${tag}`} key={tag}>
						#{tag}
					</Link>
				))}
		</TagsBlock>
	);
};

export default Tags;
