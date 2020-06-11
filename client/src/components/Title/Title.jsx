import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  width: 80vw;
  text-align: left;
  color: white;
  margin-bottom: 10px;
`;
const StyledHr = styled.hr`
  width: 80vw;
  height: 1px;
  border-bottom: 1px;
  color: white;
`;
const Title = ({ title }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledHr />
    </>
  );
};

export default Title;
