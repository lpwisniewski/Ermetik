import 'babel-polyfill'

// import './styles/main'
// TODO CSS

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'preact-router'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[role=application]')
  render("Hello, world!", root)
})
