import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Comment from './component/Comment.jsx'
import store from './store/store'

const app = (
  <Provider store={ store }>
    <Comment></Comment>
  </Provider>
)


ReactDOM.render(app, document.getElementById('box'))