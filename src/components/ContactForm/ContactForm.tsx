import React, {useState} from 'react';
import {GotUser} from "../../types";
import Modal from "../Modal/Modal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<GotUser>({
    name: '',
    number: '',
    email: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const cancel = () => {
    setShowModal(false);
    setUser({
      name: '',
      number: '',
      email: '',
    });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='ms-5 ps-5' style={{width: '400px'}}>
        <div className='text-center'>
          <h5 className='fs-4 text-danger'>Заказать обратный звонок</h5>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id='name'
            name='name'
            className="form-control"
            type="text"
            value={user.name}
            placeholder="Введите ваше имя"
            required
            onChange={onUserChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Phone number</label>
          <input
            id="number"
            name='number'
            className="form-control"
            type="number"
            value={user.number}
            placeholder="Введите ваш телефон"
            required
            onChange={onUserChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            id="email"
            name='email'
            className="form-control"
            type="email"
            value={user.email}
            placeholder='Введите ваш email'
            required
            onChange={onUserChange}
          />
        </div>
        <div className='text-center'>
          <button className='btn btn-danger'>Отправить</button>
        </div>
      </div>
      <Modal user={user} show={showModal} onClose={cancel}/>
    </form>
  );
};

export default ContactForm;