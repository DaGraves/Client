import React from 'react';

export default function RegistrationSuccessPage(props) {
  window.setTimeout(() => {
    return props.history.push('/login');
  }, 3000);

  return (
    <section className='row'>
      <div className='col-12'>
        <h1 className='center'>Thank you for registering!</h1>
        <p className='center'>You will be redirected to the login page now...</p>
      </div>
    </section>
  );
}