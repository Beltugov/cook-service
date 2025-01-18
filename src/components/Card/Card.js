import React, {useState} from 'react';
import "./Card.scss"
import Like from "../Icons/Like";
import {useDispatch} from "react-redux";
import {setLiked} from "../../store/acrion/itemAction";
import Counter from "../Counter/Counter";
import {addItem} from "../../store/acrion/cartAction";


const Card = ({elem, type}) => {
  const dispatch = useDispatch()
  const [openCard, setOpenCard] = useState(false)
  let count

  const getCount = (value) => {
    count = value
  }

  return (
    <div className={`${openCard && "card-wrapper"}`} onClick={() => setOpenCard(false)}>
      <div className={`card ${openCard && "open"}`} onClick={(e) => {
        e.stopPropagation()
        setOpenCard(true)
      }}>
        <button className="card__like" onClick={(e) => {
          e.stopPropagation()
          dispatch(setLiked(type, elem.id))
        }}>
          <Like like={elem.isLiked}/>
        </button>
        <div className="card__img">
          <img src={elem.img} alt="img"/>
        </div>
        <div className="card-content">
          <div className="card-content__title">
            {elem.title}
          </div>
          <div className="card-content__info">
            <div className="card-content__info-gram">
              {elem.gram}
            </div>
            <div className="card-content__info-calories">
              {elem.calories}
            </div>
            <div className="card-content__info-price">
              {elem.price}₽
            </div>
          </div>
          <div className="card-content__description">{elem.description}</div>
          <div className="card-content__action" onClick={(e) => e.stopPropagation()}>
            <Counter getCount={getCount}/>
            <button className="action-btn" onClick={() => {
              dispatch(addItem(elem, count))
            }}>Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
