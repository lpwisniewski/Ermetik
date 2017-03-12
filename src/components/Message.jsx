import { h, Component } from 'preact';

export default class MessageFlux extends Component {
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
