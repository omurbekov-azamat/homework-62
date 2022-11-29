import React from 'react';
import ItemFromMenu from "./ItemFromMenu";
import {CustomerMenu} from "../../../types";

interface Props {
  menu: CustomerMenu[];
  getOrder: (id:number) => void;
}

const Menu:React.FC<Props> = ({menu, getOrder}) => {
  return (
    <div className='d-flex flex-wrap' style={{width: '500px'}}>
      {menu.map((itemFromMenu) => (
        <ItemFromMenu
          key={Math.random() * 99999}
          name={itemFromMenu.name}
          image={itemFromMenu.image}
          price={itemFromMenu.price}
          getOrder={() => getOrder(itemFromMenu.id)}
        />
      ))}
    </div>
  );
};

export default Menu;