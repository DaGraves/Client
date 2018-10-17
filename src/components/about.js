import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props){
  return (
    <section className='row'>
      <div className='col-12 left about'>
        <h2 className='about-heading'>About</h2>
        <p>
          <strong>Privet</strong> uses a <em>Spaced Repetition</em> algorithm to speed up your learning.
        </p>
        <p>
          Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays.
        </p>
        <p>
          With <strong>Privet</strong>, we help you stay ahead of that moment of forgetting, and we do it <em>efficiently</em>.
        </p>
        <p>
          As you answer words correctly, we'll show you those words less frequently. If you guess the wrong answer, we'll give you more opportunities to practice that word. <em>Learning has never been easier!</em>
        </p>
        <p>
          <Link to='/register'><strong>Start your journey to Russian fluency now!</strong></Link>
        </p>
      </div>
    </section>
  );
}