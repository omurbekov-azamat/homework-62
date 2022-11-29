import React from 'react';
import ContactForm from "../../Components/ContactForm/ContactForm";
import Carousel from "../../Components/Carousel/Carousel";
import Address from "../../Components/Address/Address";

const Contacts = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <img src="https://www.google.com/maps/d/thumbnail?mid=1N6j-_SrRjZO7t2lL7hmchg3na68&hl=en_US" alt="map"/>
        <div style={{width: '600px'}}>
          <Address/>
          <ContactForm/>
        </div>
      </div>
      <Carousel/>
    </div>
  );
};

export default Contacts;