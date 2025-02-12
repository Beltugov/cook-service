import React, {useState} from 'react';
import "./Header.scss"
import Logo from "../Icons/Logo";
import WhatsApp from "../Icons/WhatsApp";
import {useSelector} from "react-redux";
import Menu from "../Menu/Menu";
import {Link} from "react-router-dom";

const Header = () => {
  const cart = useSelector(({cartReducer}) => cartReducer)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="header">
      <Link to={"/"} className="header__logo">
        <Logo/>
      </Link>
      <div className="header__action">
        <button className="button whats-app" >
          <WhatsApp/> WhatsApp
        </button>
        {cart.items.length > 0 &&
          <Link to={"order"} className="button grey">Заказать {cart.totalCount} шт. за {cart.totalPrice}₽</Link>}
        <button className="button round grey" onClick={() => setIsOpenMenu(true)}>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0C5.2 0 3 2.2 3 5C3 7.8 5.2 10 8 10C10.8 10 13 7.8 13 5C13 2.2 10.8 0 8 0ZM8 1.5C9.9 1.5 11.5 3.1 11.5 5C11.5 6.9 9.9 8.5 8 8.5C6.1 8.5 4.5 6.9 4.5 5C4.5 3.1 6.1 1.5 8 1.5ZM2.3 12C1 12 0 13 0 14.3V14.9C0 16.4 0.9 17.7 2.4 18.6C3.9 19.5 5.7 20 8 20C10.3 20 12.2 19.5 13.6 18.5C15 17.5 16 16.3 16 14.8V14.2C16 13 15 11.9 13.7 11.9H2.3V12ZM2.3 13.5H13.8C14.2 13.5 14.6 13.8 14.6 14.3V14.9C14.6 15.7 14.1 16.6 12.9 17.3C11.7 18 10 18.5 8 18.5C6 18.5 4.3 18 3.2 17.3C2.1 16.6 1.5 15.7 1.5 14.9V14.3C1.5 13.8 1.8 13.5 2.3 13.5Z"
              fill="currentColor"/>
          </svg>
        </button>
      </div>
      <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
    </div>
  );
};

export default Header;