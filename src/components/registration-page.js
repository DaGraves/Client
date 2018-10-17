import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in redirect to practice page
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
        {/* pass history prop to registration form. added this to match requirement in the user stories */}
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
