import React from 'react';
import Meal from "../Meal/Meal";
import Price from "../Price/Price";
import Name from "../Name/Name";

interface ItemFromMenuProps {
  name: string;
  image: string;
  price: number;
  getOrder: React.MouseEventHandler;
}

const ItemFromMenu:React.FC<ItemFromMenuProps> = (props) => {
  return (
    <div onClick={props.getOrder} className='d-flex border border-white align-items-center' style={{width: '250px', height: '264px'}}>
      <Meal image={props.image} name={props.name}/>
      <div className='text-uppercase text-white ms-2'>
        <Name name={props.name}/>
        <Price price={props.price}/>
      </div>
    </div>
  );
};

export default ItemFromMenu;