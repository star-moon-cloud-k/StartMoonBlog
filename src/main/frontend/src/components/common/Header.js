import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const TopMenuComponent = () => {
	const [isShow, setShow] = useState('true');

	const toggleMenu = () => {
		setShow(isShow => !isShow); //on , off 토글
		console.log(isShow);
	};
	return (
		<>
			{/* <SideButton onClick={() => toggleMenu()}>메뉴 토글</SideButton> */}
			<SideDiv>
				<Link to="/">
					<SideButton>HOME</SideButton>
				</Link>

				<Link to="/write">
					<SideButton>WRITE</SideButton>
				</Link>
				<Link to="/admin">
					<SideButton>MYPAGE</SideButton>
				</Link>
			</SideDiv>
		</>
	);
};

const SideDiv = styled.div`
	width: 40%;
	margin-bottom: 0rem;
	float: center;
`;

const SideButton = styled.button`
	border: 0px solid red;
	padding: 1.5rem;
	margin: 0rem;
	color: ${palette.gray[7]};
	font-weight: bold;
	width: 13%;
	height: 3rem;
	font-size: 1rem;
	font: #fffdf9;
	background-color: transparent;
	aspect-ratio: 4 / 3;
	&:hover {
		color: #0283bf;
		cursor: pointer;
	}
`;
export default TopMenuComponent;
