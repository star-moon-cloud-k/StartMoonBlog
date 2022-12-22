import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	width: 1024px;
	margin: 0 auto; //중앙정렬

	/* 브라우저 크기에 따라 가로 크기 정렬 */
	@media (max-witdh: 1024px) {
		width: 768px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Responsive = ({ children, ...rest }) => {
	//style, className , onClick, onMouseMove 등의 props를 사용할 수 있도록
	//...rest를 사용하여 ResponsiveBlock에 전달
	return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
