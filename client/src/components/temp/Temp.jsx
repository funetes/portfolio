import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../utils";
const TempContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s linear;
`;
const Email = styled.a`
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
  color: white;
  &:hover {
    color: lightgray;
    transition: color 0.3s ease-in;
  }
`;
const Summary = styled.p`
  border-radius: 5px;
  padding: 15px;
`;
const Temp = () => {
  return (
    <TempContainer id="contact">
      <Summary>아래 메일로 요청을 주시면 이력서를 보내드립니다. </Summary>
      <Email
        href="mailto: kimlove2324@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        kimlove2324@gmail.com
      </Email>
    </TempContainer>
  );
};

export default Temp;
