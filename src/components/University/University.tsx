import React from 'react';
import {GotUniversity} from "../../types";

interface Props {
  university: GotUniversity;
}

const University: React.FC<Props> = ({university}) => {
  return (
    <div className='my-2 p-2 border col-2 text-center align-items-center d-flex flex-column justify-content-around' style={{width: '600px', height: '150px'}}>
      <p>University:  {university.name}</p>
      <p>Country:  {university.country}</p>
      <a className='btn btn-primary' href={'https://www.' + university.domains} target='_blank'>Подробнее</a>
    </div>
  );
};

export default University;