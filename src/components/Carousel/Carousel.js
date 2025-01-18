import React, {useState} from 'react';
import "./Carousel.scss"
import RadioInput from "../RadioInput/RadioInput";

const Carousel = ({children, transition}) => {
  const [radioValue, setRadioValue] = useState(0)
  let isDraggable = false
  let startX = 0

  const grabStart = (e) => {
    isDraggable = true
    startX = e.clientX + (e.currentTarget.offsetWidth * radioValue)
    e.currentTarget.style.transition = `0s`
  }

  const grabMove = (e) => {
    if (isDraggable) {
      e.currentTarget.style.transform = `translateX(${e.clientX - startX}px)`
    }
  }
  const grabEnd = (e) => {
    isDraggable = false
    if (e.clientX - startX < (-e.currentTarget.offsetWidth * 0.5 - e.currentTarget.offsetWidth * (radioValue)) && radioValue < children.length) {
      setRadioValue(radioValue + 1)
    }
    if (e.clientX - startX > (e.currentTarget.offsetWidth * 0.5 - e.currentTarget.offsetWidth * (radioValue)) && radioValue > 0) {
      setRadioValue(radioValue - 1)
    }
    e.currentTarget.style.transition = `${transition}s`
    e.currentTarget.style.transform = `translateX(-${radioValue * 100}%)`
  }

  return (
    <div className="carousel">
      <div className="carousel-content"
           style={{
             transform: `translateX(-${radioValue * 100}%)`,
             transition: `${transition}s`
           }} onMouseDown={grabStart} onMouseMove={grabMove} onMouseUp={grabEnd}>
        {children.map((elem, index) =>
          <div className={`carousel-content__slide ${index === radioValue && "active"}`}
               style={{
                 transition: `${transition}s`,
               }}
          >
            {elem}
          </div>)}
      </div>
      <div className="carousel-action">
        {children.map((elem, index) =>
            <RadioInput id={`slide-${index}`} value={index} current={radioValue} name={"slide"} setValue={setRadioValue} >
              <div className={`custom-radio-btn ${index === radioValue && "active"}`}
                   style={{transition: `background ${transition}s, border ${transition}s`}}/>
            </RadioInput>
        )}
      </div>
    </div>
  );
};

export default Carousel;