import React from 'react';
import {GotUniversity} from "../../types";

interface Props {
  country: GotUniversity;
}

const University: React.FC<Props> = ({country}) => {
  const color: string[] = ['lightblue', 'lightcoral', 'lightcyan', 'lightgray', 'lightpink', 'lightgreen', 'lightgrey', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightgoldenrodyellow', 'lightsteelblue', 'lightyellow'];

  const random = (args: string[]) => {
    const rant = Math.floor(Math.random() * args.length);
    return args[rant];
  };

  return (
    <div
      className='my-2 p-2 border col-2 text-center align-items-center d-flex flex-column justify-content-around bg-dark bg-opacity-50 rounded'
      style={{width: '600px', height: '150px'}}>
      <div className='d-flex justify-content-between' style={{width: '540px'}}>
        <div className='text-start'>
          <p className='m-0'>Country: {country.country}</p>
          <p className='m-0'>Capital: {country.capital}</p>
        </div>
        <img className='ps-1' style={{width: '80px'}} src={country.flag} alt={country.country}/>
      </div>
      <p className='m-0 text-uppercase fw-bolder' style={{color: random(color)}}>{country.name}</p>
      <a className='btn btn-outline-light' href={'https://www.' + country.domains} target='_blank'>Подробнее</a>
    </div>
  );
};

export default University;