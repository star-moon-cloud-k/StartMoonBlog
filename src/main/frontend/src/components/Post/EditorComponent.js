import React, { Component, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Responsive from '../common/Responsive';
import styled from 'styled-components';

const EditorBlock = styled(Responsive)`
	/* 페이지 위 아래 여백 지정 */
	padding-top: rem;
	padding-bottom: 1rem;
`;
const TitleInput = styled.input`
	font-size: 3rem;
	outline: none;
	padding-bottom: 0.5rem;
	border: none;
	border-bottom: 1px solid #727274;
	margin-bottom: 2rem;
	width: 100%;
`;

const modules = {
	toolbar: [
		//[{ 'font': [] }],
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['link', 'image'],
		[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
		['clean'],
	],
};

const formats = [
	//'font',
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'align',
	'color',
	'background',
];

const EditorComponent = ({ title, body, onChangeField }) => {
	const onChangeTitle = e => {
		onChangeField({ key: 'title', value: e.target.value });
	};

	return (
		<div style={{ height: '650px' }}>
			<EditorBlock>
				<TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
				<ReactQuill
					style={{ height: '500px' }}
					theme="snow"
					modules={modules}
					formats={formats}
					value={body || ''}
					onChange={(content, delta, source, editor) =>
						onChangeField({ key: 'body', value: editor.getHTML() })
					}
				/>
			</EditorBlock>
		</div>
	);
};

export default EditorComponent;
