import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import MainPage from './MainPage';
import PostPage from './PostPage';
import AdminPage from './AdminPage';
import WritePage from './WritePage';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/write" element={<WritePage />} />
			<Route path="/post/:ID" element={<PostPage />} />
			<Route path="/admin" element={<AdminPage />} />
		</Routes>
	);
};

export default Router;
