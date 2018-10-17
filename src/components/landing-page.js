import React from 'react';
import {connect} from 'react-redux';

import LinkButton from './LinkButton';
import RegistrationForm from './registration-form';
import About from './about';
import './landing.css';

export function LandingPage(props) {
  
  const ctaBtnLink = props.loggedIn ? 'practice' : 'register';
  const ctaBtnText = props.loggedIn ? 'Let\'s Go!' : 'Sign Me Up!';
  let aboutArea = (
    <div className='col-12'>
      <div className='col-8'>
        <About />
      </div>
      <div className='reg-form col-4'>
        <h2>Register</h2>
        <RegistrationForm />
      </div>
    </div>
  );
  
  if (props.loggedIn) {
    aboutArea = (
    <div className='col-12'>
        <About />
    </div>
    );
  }
  
  return (
    <main className='home'>
      <section className='heading'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='title'>Learning Russian has never been easier</h1>
            <p className='subtitle'>Fast and fun way to memorize new words!</p>
            <LinkButton to={ctaBtnLink}>{ctaBtnText}</LinkButton>
          </div>
        </div>
      </section>
      <section className=' row about-section'>
        { aboutArea }
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
