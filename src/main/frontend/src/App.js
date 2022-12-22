import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import AdminPage from './pages/AdminPage';
import Router from './pages/Router';
import Header from './components/common/Header';

const App = () => {
	return (
		<>
			<Header />
			<Router />
		</>
	);
};

export default App;
