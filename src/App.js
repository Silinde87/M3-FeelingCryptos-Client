import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Error from './pages/ErrorPage/ErrorPage'
import Profile from './pages/Profile/Profile'
// Components
import Navbar from './components/Navbar/Navbar';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import WebsocketBinance from './components/WebsocketBinance/WebsocketBinance';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={Profile}  />
          <PrivateRoute exact path="/private/edit" component={Profile} />
          <PrivateRoute exact path="/private/feed" component={Profile} />
          <PrivateRoute exact path="/private/:market" component={Profile} />
          <Route
                exact
                path="/markets/:market"
                component={Home}
              />
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
