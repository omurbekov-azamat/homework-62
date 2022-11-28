import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {GotUser} from "../../types";

interface Props {
  user: GotUser;
  show: boolean;
  onClose: React.MouseEventHandler
}

const Modal: React.FC<Props> = ({show, onClose, user}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div className='modal show' style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='p-5'>
                <p className='fs-5 text-capitalize'>Hello {user.name}!</p>
                <p>Your phone number: {user.number}</p>
                <p>Your email: {user.email}</p>
              <div className='d-flex justify-content-between'>
                <p className='text-uppercase fw-bolder text-danger'>We will call you back!!!</p>
                <button className='btn btn-info' onClick={onClose}>close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;