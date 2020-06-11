import React, { useState, useEffect, useRef } from "react";
import {
  IMG,
  RightButton,
  LeftButton,
  Container,
  SliderContainer,
  Pagination,
} from "./styled";
import PropTypes from "prop-types";

const Slider = ({ projectImg }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () =>
    currentSlide >= projectImg.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  const prevSlide = () =>
    currentSlide !== 0 ? setCurrentSlide(currentSlide - 1) : null;
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {projectImg.map((image, i) => (
          <IMG key={i} src={image} />
        ))}
      </SliderContainer>
      <LeftButton onClick={prevSlide}>{`<`}</LeftButton>
      <RightButton onClick={nextSlide}>{`>`}</RightButton>
      {projectImg.map((image, i) => (
        <Pagination key={i} isThat={currentSlide === i}>
          {"•"}
        </Pagination>
      ))}
    </Container>
  );
};

Slider.propTypes = {
  projectImg: PropTypes.array.isRequired,
};

export default Slider;
