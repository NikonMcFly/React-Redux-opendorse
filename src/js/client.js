import React from "react";
import ReactDOM from "react-dom";
import  { Provider } from 'react-redux';
import App from "./components/App";
import PostLogin  from "./components/postLogin";
// import Dash from "./components/Dashboard";
// import ContactForm from "./components/List";

import configureStore from './redux/store';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'

let store = configureStore();

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="login" component={PostLogin} />
      </Router>
    </Provider>,
    app);
