import React from 'react';
import Order from "./Order";
import {CustomerMenu} from "../../../types";

interface Props {
  orders: CustomerMenu[];
  getPrice: (index:number) => number;
  clearOrder: (id:number) => void;
  totalPrice: number;
}

const Orders: React.FC<Props> = ({orders,getPrice,clearOrder, totalPrice}) => {

  const totalOrders: JSX.Element[] = [];

  orders.forEach((order,index) => {
    if(order.count > 0) {
      totalOrders.push(
        <Order
          key={Math.random() * 99999}
          image={order.image}
          name={order.name}
          count={order.count}
          price={getPrice(index)}
          clearOrder={() => clearOrder(order.id)}
        />
      )
    }
  })

  if(totalOrders.length === 0) {
    return (
      <div className='mt-5 text-uppercase text-center text-white' style={{width: '500px'}}>
        <h2>Order is Empty!</h2>
        <p>Please add some items!</p>
      </div>
    )
  }

  return (
    <div className='border border-white text-white' style={{width: '500px'}}>
      {totalOrders}
      <h3 className='text-center text-uppercase fw-bolder bg-danger'>Total Price: {totalPrice}</h3>
    </div>
  );
};

export default Orders;