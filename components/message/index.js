import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Message extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<li class={style.message}>
				<span class="date">[{this.props.msg.date}] </span>
				<span class="author">{this.props.msg.author}: </span>
				<span>{this.props.msg.text}</span>
			</li>
		);
	}
}
