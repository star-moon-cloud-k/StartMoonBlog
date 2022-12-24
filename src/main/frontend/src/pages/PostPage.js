import React from 'react';
// import CommentComponent from '../components/Post/CommentComponent';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import CommentActionsButtonContainer from '../containers/post/CommentActionsButtonContainer';
import CommentContainer from '../containers/post/CommentContainer';

const PostPage = () => {
	return (
		<>
			<PostViewerContainer />
			<CommentContainer />
			{/* <CommentActionsButtonContainer /> */}
		</>
	);
};

export default PostPage;
