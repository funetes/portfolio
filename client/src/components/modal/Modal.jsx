import React from "react";
import styled from "styled-components";
import Slider from "../slider/Slider";
import { fadeIn } from "../../utils";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: white;
  transform: translate(-50%, -50%);
  @media (max-width: 480px) {
    top: 40%;
    width: 90%;
  }
  animation: ${fadeIn} 0.5s linear;
`;

const Modal = ({ isOpen, close, projectImg }) => {
  // projectImg는 서버에서 불러오는게 좋지 않을까?
  return (
    <>
      {isOpen ? (
        <>
          <ModalOverlay onClick={close} />
          <Content>
            <Slider images={projectImg} />
          </Content>
        </>
      ) : null}
    </>
  );
};

export default Modal;
