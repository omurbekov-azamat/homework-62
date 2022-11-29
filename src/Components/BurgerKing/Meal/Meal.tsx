import React from 'react';

interface MealProps {
  image:string;
  name:string;
}

const Meal:React.FC<MealProps> = (props) => {
  return (
    <img className='meal' src={props.image} alt={props.name} style={{width: '100px', height: '100px'}}/>
  );
};

export default Meal;