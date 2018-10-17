import React from 'react';
import './word.css'

export default function Word(props){
  return (
    <section className='word-section row'>
      <div className='col-12'>
        <div className='language'>
          <p>Russian</p>
        </div>
        <div className='word'>
          <p className='original-word center'>{props.word.word.word}</p>
          <p className='translit center'>( {props.word.word.translit} )</p>
        </div>
      </div>
    </section>
  );
}