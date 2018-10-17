import React, { Component } from 'react';
import './assets/css/dashboard.css'
import './assets/css/group.css'
import './assets/css/style.css'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Dashboard3 from './components/3on3/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login/Login';
import { setCurrentUser, logoutUser } from './actions/globalAction';
import jwt_decode from 'jwt-decode';
import Pendaftar from './components/Users';

if(localStorage.jwToken){
  const decoded = jwt_decode(localStorage.jwToken)
  const currentTime = Date.now() / 1000
  store.dispatch(setCurrentUser(decoded))
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser())
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Switch>
              <PrivateRoute path="/dashboard" component={Pendaftar} />
            </Switch>
            <Switch>
              <PrivateRoute path="/detail/:sekolah" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute path="/detail-3on3/:sekolah" component={Dashboard3} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
