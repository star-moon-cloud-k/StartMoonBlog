import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonsBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 2rem;
	margin-top: -1.5rem;
`;

const ActionButton = styled.button`
	padding: 0.25rem 0.5rem;
	/* border-radius: 2px; */
	border: 0px solid red;
	color: ${palette.gray[7]};
	background: white;
	width: 3.5rem;
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

const PostActionButtons = ({ onEdit, onRemove }) => {
	const [modal, setModal] = useState(false);
	const onRemoveClick = () => {
		setModal(true);
	};
	const onCancel = () => {
		setModal(false);
	};
	const onConfirm = () => {
		setModal(false);
		onRemove();
	};

	return (
		<>
			<PostActionButtonsBlock>
				<ActionButton onClick={onEdit}>수정</ActionButton>
				<ActionButton onClick={onRemoveClick}>삭제</ActionButton>
			</PostActionButtonsBlock>
			<AskRemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
		</>
	);
};

export default PostActionButtons;
