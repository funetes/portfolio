import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IMG = styled.img`
  width: 100%;
  height: 70vh;
  @media (max-width: 480px) {
    height: 40vh;
  }
`;
const Button = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  padding: 0.5em;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;
const RightButton = styled(Button)`
  right: 0%;
`;
const LeftButton = styled(Button)`
  left: 0%;
`;
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Pagination = styled.span`
  color: ${(props) => (props.isThat ? "red" : "black")};
  padding: 10px;
  opacity: 0.8;
  font-size: 20px;
`;

const Slider = ({ projectImg }) => {
  console.log(projectImg);
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
