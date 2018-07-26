import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import 'styles/main.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const basename = `/${process.env.REACT_APP_BASENAME}`

ReactDOM.render(
  <Router basename={basename}>
    <App />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
