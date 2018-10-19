import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

export default function About(props){
  return (
    <section className='row'>
      <div className='col-12 left about'>
        <h1 className='about-heading'>Aprender</h1>
        <section className='about-body'>
        <p>
          Have you ever wanted to learn a new language but didn't know where to start? Aprender is the ideal starting point to learning a language.
          <p>Aprender makes a fun and simple way of memorizing words to help you learn a language.</p>
          </p>
        <p>
          
          <Link to='/register' className='button'>SIGN UP!</Link>
        </p>
        </section>
      </div>
    </section>
  );
}