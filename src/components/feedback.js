import React from 'react';
import './feedback.css';

export default function Feedback(props) {
  if(!props.feedback){
    return <p>loading...</p>;
  }
  let feedbackText;
  if (!props.feedback.correct) {
    feedbackText =
      <section className='feedback'>
        <div className='row'>
          <div className='col-12'>
            <div className='feedback-message'>
            <p className='wrong-answer'>You answered <span className='wrong-answer-props'>"{props.userAnswer}"</span>. The correct answer was <span className='wrong-answer-props'>"{props.feedback.answer}."</span></p>
            </div>
          </div>
        </div>
      </section>;
  } else {
    feedbackText = <section className='feedback'>
      <div className='row'>
        <div className='col-12'>
          <div className='feedback-message'>
            <p className='correct-answer'>Good Job! Proceed to the next word.</p>
          </div>
        </div>
      </div>
    </section>;
  }

  return (
    <section>
      {feedbackText}
    </section>
  );
}
