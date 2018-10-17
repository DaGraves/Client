import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './login-page.css';

export function LoginPage(props) {

  if (props.loggedIn) {
    return <Redirect to="/practice" />;
  }
  return (
    <main role='main' className='login-page'>
      <section className='row home'>
        <div className="col-12">
          <h1 className='login-page-heading'>Login</h1>
        </div>
        <div className="col-4">
          <LoginForm />
        </div>
        <div className="col-12">
          <p className='register-para'>Don't have an account yet? <Link className='register-link' to="/register">Sign up now!</Link></p>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);