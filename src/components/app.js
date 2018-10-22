import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Navbar from './navbar';
import LandingPage from './landing-page';
import Practice from './practice-page';
import RegistrationPage from './registration-page';
import LoginPage from './login-page';
import {refreshAuthToken} from '../actions/auth';
import LogoutPage from './logout-page';
import Progress from './progress';
import RegistrationSuccessPage from './registration-success';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/success" component={RegistrationSuccessPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
