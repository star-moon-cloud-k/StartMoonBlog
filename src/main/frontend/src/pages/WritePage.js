import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteActionButtons from '../components/Post/WriteActionButton';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionsButtonsContainer';

const WritePage = () => {
	return (
		<Responsive>
			<EditorContainer />
			<TagBoxContainer />
			<WriteActionButtonsContainer />
		</Responsive>
	);
};

export default WritePage;
