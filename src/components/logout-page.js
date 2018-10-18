import React from 'react';

export default function LogoutPage(props){
    window.setTimeout(() => {
      return props.history.push('/');
    }, 3000);

    return (
      <section className='row'>
        <div className='col-12'>
          <h1 className='center'>Hope you had fun and learned something.</h1>
          <p className='center'>Hope you come back to learn more</p>
          <p className='center'>Redirecting to homepage...</p>
        </div>
      </section>
    );
}