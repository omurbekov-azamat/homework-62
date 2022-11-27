import React from 'react';
import {GotUniversity} from "../../types";
import University from "./University";
import './University.css'

interface Props {
  allUniversities: GotUniversity[]
}

const Universities: React.FC<Props> = ({allUniversities}) => {

  const empty = () => {
    if (allUniversities.length === 0) {
      return (
        <div className='wrap'>
          <div className='circle circle-2'>
            loading...
          </div>
        </div>
      )
    }
  };

  return (
    <div className='row m-0 p-3 overflow-auto' style={{height: '600px', width: '600px'}}>
      {allUniversities.map(university => (
        <University
          key={Math.random() * 999999}
          university={university}
        />
      ))}
      {empty()}
    </div>
  );
};

export default Universities;