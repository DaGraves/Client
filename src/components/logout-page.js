import React from 'react';

export default function LogoutPage(props){
    window.setTimeout(() => {
      return props.history.push('/');
    }, 3000);

    return (
      <section className='row'>
        <div className='col-12'>
          <h1 className='center'>Thank you for using the app!</h1>
          <p className='center'>You have successfully logged out. Come back soon!</p>
          <h2 className='center'>До свидания!</h2>
          <p className='center'>Redirecting to homepage...</p>
        </div>
      </section>
    );
}