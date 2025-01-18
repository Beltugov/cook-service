import React from 'react';
import "./Order.scss"
import {useSelector} from "react-redux";

const Order = () => {
  const order = useSelector(({cartReducer}) => cartReducer)
  console.log(order)
  return (
    <div className="order">
      <h1 className="order__title">Мой заказ</h1>
      <ul className="order__list">
        {order.items.map((elem) =>
          <li className="order__list-item">
            <img src={elem.item.img} alt=""/>
            <h2>{elem.item.title}</h2>
            <span>{elem.itemCount} шт.</span>
            <span>{elem.itemPrice}₽</span>
          </li>
        )}
      <li className="order__amount">
        <span>Итого</span>
        <span>{order.totalPrice}₽</span>
      </li>
      </ul>
    </div>
  );
};

export default Order;