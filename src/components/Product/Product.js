import React, {useState} from 'react';
import Filter from "../Filter/Filter";
import "./Product.scss"
import Card from "../Card/Card";
import {useSelector} from "react-redux";

const Product = () => {
  const typeList = useSelector(({itemReducer}) => itemReducer)
  const [filterType, useFilterType] = useState("Все")

  return (
    <div className="product">
      <Filter typeList={typeList} radioValue={filterType} setRadioValue={useFilterType} />
      {typeList.map((elem) => (
        <>
          {elem.type === filterType && <div className="product-block">
            <h1 className="product-block__title">{elem.type}</h1>
            <div className="product-block__list">
              {elem.items.map((value) => <Card elem={value} type={elem.type}/>)}
            </div>
          </div>}
          {filterType === "Все" && <div className="product-block">
            <h1 className="product-block__title">{elem.type}</h1>
            <div className="product-block__list">
              {elem.items.map((value) => <Card elem={value} type={elem.type}/>)}
            </div>
          </div>}
          {filterType === "Любимое" && elem.items.find((value) => value.isLiked) && <div className="product-block">
            <h1 className="product-block__title">{elem.type}</h1>
            <div className="product-block__list">
              {elem.items.map((value) => value.isLiked && <Card elem={value} type={elem.type}/>)}
            </div>
          </div>
          }
        </>
      ))}
    </div>
  );
};

export default Product;