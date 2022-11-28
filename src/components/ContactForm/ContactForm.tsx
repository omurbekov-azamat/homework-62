import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className='p-3' style={{width: '400px'}}>
        <div className='text-center'>
          <h5 className='fs-4 text-danger'>Заказать обратный звонок</h5>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Введите ваше имя"/>
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Phone number</label>
          <input type="number" className="form-control" id="number" placeholder="Введите ваш телефон"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder='Введите ваш email'/>
        </div>
        <div className='text-center'>
          <button className='btn btn-danger'>Отправить</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;