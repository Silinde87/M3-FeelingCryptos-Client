import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Private from './pages/Private/Private';

// Components
import Navbar from './components/Navbar/Navbar';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import ProfileFeedPage from './pages/ProfileFeedPage/ProfileFeedPage';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
<<<<<<< HEAD
          <Route
                exact
                path="/:market"
                component={Home}
              />

=======
          <PrivateRoute exact path="/private/edit" component={EditProfilePage} />
          <PrivateRoute exact path="/private/feed" component={ProfileFeedPage} />
>>>>>>> e273877755773a2a652a2b2dc9daaaae52303076
        </Switch>
      </div>
    );
  }
}

export default App;
