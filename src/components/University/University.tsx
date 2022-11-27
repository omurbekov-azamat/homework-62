import React from 'react';
import {GotUniversity} from "../../types";

interface Props {
  university: GotUniversity;
}

const University: React.FC<Props> = ({university}) => {
  const color: string[] = ['lightblue', 'lightcoral', 'lightcyan', 'lightgray', 'lightpink', 'lightgreen', 'lightgrey', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightgoldenrodyellow', 'lightsteelblue', 'lightyellow'];

  const random = (args: string[]) => {
    const rant = Math.floor(Math.random() * args.length);
    return args[rant];
  };

  return (
    <div className='my-2 p-2 border col-2 text-center align-items-center d-flex flex-column justify-content-around'
         style={{width: '600px', height: '150px', background: random(color)}}>
      <p>University: {university.name}</p>
      <p>Country: {university.country}</p>
      <a className='btn btn-outline-danger' href={'https://www.' + university.domains} target='_blank'>Подробнее</a>
    </div>
  );
};

export default University;