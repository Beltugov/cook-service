import React, {useState} from 'react';
import "./Filter.scss"
import RadioInput from "../RadioInput/RadioInput";

const Filter = ({typeList,  radioValue, setRadioValue}) => {

  return (
    <div className="filter">
      <div className="filter-title">
        <h2>Частным клиентам</h2>
        <h2>Корпоративные заказы</h2>
      </div>
      <div className="filter-list">
        <RadioInput id={`filter-0`} value={"Все"} current={radioValue} setValue={setRadioValue} name={"filter"}>
          <div className={`button grey ${0 === radioValue && "active"}`}>Все</div>
        </RadioInput>
        <RadioInput id={`filter-1`} value={"Любимое"} current={radioValue} setValue={setRadioValue} name={"filter"}>
          <div className={`button grey ${1 === radioValue && "active"}`}>Любимое</div>
        </RadioInput>
        {typeList.map((elem, index) =>
          <RadioInput id={`filter-${index+2}`} value={elem.type} current={radioValue} setValue={setRadioValue} name={"filter"}>
            <div className={`button grey ${(index+2) === radioValue && "active"}`}>{elem.type}</div>
          </RadioInput>
        )}
      </div>
    </div>
  );
};

export default Filter;