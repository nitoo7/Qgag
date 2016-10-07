import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Home from "./components/Home"
import Header from "./components/Header"
import GagPage from "./components/GagPage"
import GagSection from "./components/GagSection"
import store from "./store"


const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route path="section" name="section" component={GagSection}/>
        <Route path="post/:postId" name="page" component={GagPage}/>
      </Route>
    </Router>
  </Provider>,
  app
)

