import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import Carousel from "../../components/Carousel/Carousel";

const Contacts = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <div>
          <img
            src="https://www.google.com/maps/d/thumbnail?mid=1N6j-_SrRjZO7t2lL7hmchg3na68&hl=en_US"
            alt="map"/>
        </div>
        <div style={{width: '600px'}}>
          <div className='d-flex justify-content-center'>
            <div className='pe-3 fw-bolder'>
              <p>Наш Адрес:</p>
              <p>Контактные телефоны:</p>
              <p>Контактный email:</p>
              <p>Часы работы:</p>
              <p>Обед:</p>
              <p>Выходные:</p>
            </div>
            <div className='ps-3'>
              <p>г. Винтерфелл, улица Старка, дом 9</p>
              <p>8-913-674-92-76</p>
              <p>winter_is_coming@gmail.com</p>
              <p>9.00 - 18.00</p>
              <p>12.00 - 13.00</p>
              <p>Сб. - Вс.</p>
            </div>
          </div>
          <div className='ps-5 ms-5'>
            <ContactForm/>
          </div>
        </div>
      </div>
      <Carousel/>
    </div>
  );
};

export default Contacts;