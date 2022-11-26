import React from 'react';
import {GotUniversity} from "../../types";
import University from "./University";

interface Props {
  allUniversities: GotUniversity[]
}

const Universities: React.FC<Props> = ({allUniversities}) => {
  return (
    <div className='row m-0 p-3 border border-light overflow-auto bg-white' style={{height: '600px', width: '600px'}}>
      {allUniversities.map(university => (
        <University
          key={Math.random() * 999999}
          university={university}
        />
      ))}
    </div>
  );
};

export default Universities;