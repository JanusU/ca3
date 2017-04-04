import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import App from './pages/App';
import Home from './pages/Home';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import auth from "./authorization/auth";


function requireAuth(nextState, replace) {
  if (!auth.loggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="documentation" component={Documentation} />
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout} />
      <Route path="Products" component={Products} />
      <Route path="user" component={UserPage} />
      <Route path="admin" component={AdminPage} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('root'))