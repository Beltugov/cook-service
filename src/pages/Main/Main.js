import React from 'react';
import "./Main.scss"
import Carousel from "../../components/Carousel/Carousel";
import slide1 from "../../assets/Slide-1.png"
import slide2 from "../../assets/Slide-2.png"
import Product from "../../components/Product/Product";

const Main = () => {
  return (
    <div className="main">
      <div className="carousel-wrapper">
        <Carousel transition={0.8}>
          <div className="slide-1">
            <div className="info">
              <div className="info__title">
                Доставка из ресторана в керамической посуде
              </div>
              <button className={"button black"}>Сториз о сервисе</button>
            </div>
            <div className="img">
              <img src={slide1} alt=""/>
            </div>
          </div>
          <div className="slide-2">
            <div className="title">
              Великолепый баннер
            </div>
          </div>
          <div className="slide-3">
            <div className="info">
              <div className="info__title">
                <h1 className="title">Только башни</h1>
                <h2 className="subtitle">Москва-сити</h2>
              </div>
              <p className="info__text">
                  Наш ресторан обслуживает
                  только близких соседей.
                  <br/>
                  <br/>
                  Так никакого ожидания, все
                  горячее и свежее.
              </p>
            </div>
            <div className="img">
              <img src={slide2} alt=""/>
            </div>
          </div>
        </Carousel>
      </div>
      <Product/>
    </div>
  );
};

export default Main;