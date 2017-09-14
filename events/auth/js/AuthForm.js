'use strict';

const AuthForm = ({onAuth}) => {
  const user = {};

  function emailSanitize(event) {
    const field = event.currentTarget.value;
    event.currentTarget.value = field.replace(/[^a-zA-Z@.-]/gi,'');
  }

  function passwordSanitize(event) {
    const field = event.currentTarget.value;
    event.currentTarget.value = field.replace(/[^a-zA-Z0-9_]/gi,'');
  }

  function  submitForm(event) {
    event.preventDefault();

    for (const item of Array.from(event.currentTarget.elements)) {
      user[item.name] = item.value;
    }

    if (onAuth instanceof Function ){
      onAuth(user);
    }
  }

  return (
    <form className='ModalForm' action='/404/auth/' method='POST' onSubmit={submitForm}>
      <div className='Input'>
        <input required type='text' placeholder='Имя' name='name'/>
        <label/>
      </div>
      <div className='Input'>
        <input type='email' placeholder='Электронная почта' name='email' onChange={emailSanitize}/>
        <label/>
      </div>
      <div className='Input'>
        <input required type='password' placeholder='Пароль' name='password' onChange={passwordSanitize}/>
        <label/>
      </div>
      <button type='submit'>
        <span>Войти</span>
        <i className='fa fa-fw fa-chevron-right'/>
      </button>
    </form>
  );
};