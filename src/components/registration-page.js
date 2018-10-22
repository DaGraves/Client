import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import { Navbar } from './navbar';
import './registration-page.css';

export function RegistrationPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/practice" />;
  }
  return (
    <main className='register-page'>
      <section className='row'>
        <div className="col-12">
          <h1 className='register-page-heading'>Register</h1>
        </div>
        <div className="col-4">
          <RegistrationForm history={props.history}/>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
