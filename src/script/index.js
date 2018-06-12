require('../style/index.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Home from './comp/home'
import List from './comp/list'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRedirect to="/list"></IndexRedirect>
        <Route path="list" title="首页" component={List}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
