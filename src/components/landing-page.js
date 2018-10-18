import React from 'react';
import {connect} from 'react-redux';

import LinkButton from './LinkButton';
import RegistrationForm from './registration-form';
import About from './about';
import './landing.css';

export function LandingPage(props) {
  
  const ctaBtnLink = props.loggedIn ? 'practice' : 'register';
  const ctaBtnText = props.loggedIn ? 'Let\'s Go!' : 'Sign Me Up!';

  
  return (
    <main className='home'>
    <section className='landing-image'>
      <div className='img'>
      </div>
    </section>
      <section className='about-section'>
        <About />
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
