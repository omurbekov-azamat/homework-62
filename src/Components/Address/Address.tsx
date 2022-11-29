import React from 'react';

const Address = () => {
  return (
    <div className='d-flex justify-content-center mb-3'>
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
  );
};

export default Address;