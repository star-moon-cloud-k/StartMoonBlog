import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const CommentComponent = ({ onChangeField, comments, onCancel, onPublish }) => {
	const onChangeNameInput = e => {
		// const inputText = e.target.value;
		onChangeField({ key: 'name', value: e.target.value });
	};
	const onChangeCommentInput = e => {
		onChangeField({ key: 'comment', value: e.target.value });
	};

	return (
		<>
			{comments &&
				comments.map(com => (
					<CommentWrpper key={com.commentNumber}>
						<CommentNameBlock>{com.name} : </CommentNameBlock>
						<CommentBlock>{com.comment}</CommentBlock>
					</CommentWrpper>
				))}
			{/* <WriteCommentBlock></WriteCommentBlock> */}
			<WriteActionButtonsBlock>
				<WriteNameBlock placeholder="이름을 입력하세요" name="name" onChange={onChangeNameInput} />
				<WriteCommentBlock
					placeholder="댓글을 입력하세요"
					name="comment"
					onChange={onChangeCommentInput}
				/>
				<StyledButton gray onClick={onPublish}>
					댓글 등록
				</StyledButton>
				<StyledButton onClick={onCancel}>취소</StyledButton>
			</WriteActionButtonsBlock>
		</>
	);
};

const CommentWrpper = styled.div`
	margin-top: 0rem;
	margin-bottom: 0rem;
	margin-left: 10%;
	margin-right: 10%;
	display: flex;
`;
const CommentBlock = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	height: 2rem;
	width: 80%;
`;
const CommentNameBlock = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	font-weight: bold;
	width: 10%;
	height: 2rem;
`;
const WriteNameBlock = styled.input`
	border: 1px dashed #bcbcbc;
	margin-bottom: 1rem;
	margin-left: 0%;
	margin-right: 1%;
	height: 2rem;
`;
const WriteCommentBlock = styled.input`
	border: 0.6px dotted;
	margin-bottom: 1rem;
	margin-left: 1%;
	margin-right: 5%;
	height: 2rem;
	width: 60%;
`;
const WriteActionButtonsBlock = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 10%;
	margin-right: 10%;

	button + button {
		margin-left: 0.5rem;
	}
`;

const StyledButton = styled.button`
	padding: 0.25rem 0.5rem;
	border: 0px;
	color: ${palette.gray[7]};
	background: white;
	width: 5.5rem;
	font-weight: bold;
	outline: none;
	font-size: 1.1rem;
	cursor: pointer;
	&:hover {
		color: ${palette.gray[4]};
	}
	& + & {
		margin-left: 0.25rem;
	}
`;
export default CommentComponent;
