'use strict';

const FeedbackForm = ({data, onSubmit}) => {

  let form;
  let order = {};

  for (let snack of data.snacks) {
    order[snack] = true;
  }

  const myOnSubmit = (event) => {
    event.preventDefault();

    data.salutation = form.querySelector('.contact-form__input--radio:checked').value;
    data.name = form.name.value;
    data.email = form.email.value;
    data.subject = form.subject.value;
    data.message = form.message.value;
    data.snacks = [];

    let snacks = form.querySelectorAll('.contact-form__input--checkbox:checked');

    for (let snack of snacks) {
      data.snacks.push(snack.value);
    }

    onSubmit(JSON.stringify(data));
  };

  return (
    <form className='content__form contact-form' onSubmit={myOnSubmit} ref={elem => form = elem}>
      <div className='testing'>
        <p>Чем мы можем помочь?</p>
      </div>
      <div className='contact-form__input-group'>
        <input className='contact-form__input contact-form__input--radio' id='salutation-mr' name='salutation' type='radio' value='Мистер' defaultChecked={data.salutation === 'Мистер'} />
        <label className='contact-form__label contact-form__label--radio' htmlFor='salutation-mr'>Мистер</label>
        <input className='contact-form__input contact-form__input--radio' id='salutation-mrs' name='salutation' type='radio' value='Мисис' defaultChecked={data.salutation === 'Мисис'} />
        <label className='contact-form__label contact-form__label--radio' htmlFor='salutation-mrs'>Мисис</label>
        <input className='contact-form__input contact-form__input--radio' id='salutation-ms' name='salutation' type='radio' value='Мис' defaultChecked={data.salutation === 'Мис'} />
        <label className='contact-form__label contact-form__label--radio' htmlFor='salutation-ms'>Мис</label>
      </div>
      <div className='contact-form__input-group'>
        <label className='contact-form__label' htmlFor='name'>Имя</label>
        <input className='contact-form__input contact-form__input--text' id='name' name='name' type='text' defaultValue={data.name} />
      </div>
      <div className='contact-form__input-group'>
        <label className='contact-form__label' htmlFor='email'>Адрес электронной почты</label>
        <input className='contact-form__input contact-form__input--email' id='email' name='email' type='email' defaultValue={data.email}/>
      </div>
      <div className='contact-form__input-group'>
        <label className='contact-form__label' htmlFor='subject'>Чем мы можем помочь?</label>
        <select className='contact-form__input contact-form__input--select' id='subject' name='subject' defaultValue={data.subject}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className='contact-form__input-group'>
        <label className='contact-form__label' htmlFor='message'>Ваше сообщение</label>
        <textarea className='contact-form__input contact-form__input--textarea' id='message' name='message' rows='6' cols='65' defaultValue={data.message}/>
      </div>
      <div className='contact-form__input-group'>
        <p className='contact-form__label--checkbox-group'>Хочу получить:</p>
        <input className='contact-form__input contact-form__input--checkbox' id='snacks-pizza' name='snacks' type='checkbox' value='пицца' defaultChecked={order['пицца']} />
        <label className='contact-form__label contact-form__label--checkbox' htmlFor='snacks-pizza'>Пиццу</label>
        <input className='contact-form__input contact-form__input--checkbox' id='snacks-cake' name='snacks' type='checkbox' value='пирог' defaultChecked={order['пирог']} />
        <label className='contact-form__label contact-form__label--checkbox' htmlFor='snacks-cake'>Пирог</label>
      </div>
      <button className='contact-form__button' type='submit'>Отправить сообщение!</button>
      <output id='result' />
    </form>
  );
};