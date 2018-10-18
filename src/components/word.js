import React from 'react';
import './word.css'

export default function Word(props){
  return (
    <section className='word-section row'>
      <div className='col-12'>
        <div className='language'>
          <p>Portuguese</p>
        </div>
        <div className='word'>
          <p className='original-word center'>{props.word.word.word}</p>
        </div>
      </div>
    </section>
  );
}