import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Profile from './pages/Profile/Profile'
// Components
import Navbar from './components/Navbar/Navbar';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




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
          <Route
                exact
                path="/:market"
                component={Home}
              />
          <PrivateRoute exact path="/private/edit" component={Profile} />
          <PrivateRoute exact path="/private/feed" component={Profile} />
          <Route path='*' component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
