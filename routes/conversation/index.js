import { h, Component } from 'preact';
import style from './style';
import Message from '../../components/message';

export default class Conversation extends Component {
	constructor(props) {
		super(props);
		this.messageChanged = this.messageChanged.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	state = {
		messages : [],
	};

	messageChanged(e) {
		this.setState({text: e.target.value});
	}

	sendMessage(e) {
		e.preventDefault();
		var newMsg = {
			author: this.props.user,
			date: new Date().toLocaleTimeString(),
			text: this.state.text
		};
		this.setState((prevState) => ({
			messages: prevState.messages.concat(newMsg),
			text: ''
		}));
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.conversation}>
				<h1>Conversation with: {user}</h1>
				<ul>
				{
					this.state.messages.length === 0 && <li>No Messages</li>
				}
				{
					this.state.messages.map(msg => (
						<Message msg={msg}></Message>
					))
				}
				</ul>
				<form onSubmit={this.sendMessage}>
					<input onChange={this.messageChanged} value={this.state.text} placeholder="Message..." />
					<button>Envoyer</button>
				</form>
			</div>
		);
	}
}
