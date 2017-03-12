import 'babel-polyfill'

import './styles/main'

import { h, render, Component } from 'preact';
import { Router, hashHistory } from 'preact-router'

class TchatApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {msgs: [], text: ''};
  }

  render() {
    return (
      <main>
        <MsgFlux msgs={this.state.msgs} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} placeholder="Message..." />
          <button>Envoyer</button>
        </form>
      </main>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newMsg = {
      author: 'user',
      date: new Date().toLocaleTimeString(),
      text: this.state.text
    };
    this.setState((prevState) => ({
      msgs: prevState.msgs.concat(newMsg),
      text: ''
    }));
  }
}

class MsgFlux extends Component {
  render() {
    return (
      <ul>
        {this.props.msgs.map(msg => (
          <li>
            <span class="author">{msg.author}: </span>
            <span class="date">{msg.date}</span>
            <span>{msg.text}</span>
          </li>
        ))}
      </ul>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[role=application]')
  render(<TchatApp />, root)
})
