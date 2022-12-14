import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
const WriteActionButtonsBlock = styled.div`
	margin-top: 1rem;
	margin-bottom: 3rem;
	button + button {
		margin-left: 0.5rem;
	}
`;

const StyledButton = styled.button`
	padding: 0.25rem 0.5rem;
	border: 0px solid red;
	color: ${palette.gray[7]};
	background: white;
	width: 6.5rem;
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

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
	return (
		<WriteActionButtonsBlock>
			<StyledButton cyan onClick={onPublish}>
				포스트 {isEdit ? '수정' : '등록'}
			</StyledButton>
			<StyledButton onClick={onCancel}>취소</StyledButton>
		</WriteActionButtonsBlock>
	);
};

export default WriteActionButtons;
