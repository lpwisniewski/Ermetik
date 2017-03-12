import 'babel-polyfill'

// import './styles/main'
// TODO CSS

import { h, render, Component } from 'preact';
import { Router, hashHistory } from 'preact-router'

// Simple object to test preact
class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[role=application]')
  render(<Clock />, root)
})
