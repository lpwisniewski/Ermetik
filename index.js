import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Conversation from './routes/conversation';

export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Conversation path="/conv/" user="me" />
			<Conversation path="/conv/:user" />
		</Router>
	</div>
);
