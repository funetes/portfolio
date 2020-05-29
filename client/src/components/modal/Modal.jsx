import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  border-radius: 10px;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const Modal = ({ isOpen, close, projectImg }) => {
  // projectImg는 서버에서 불러오는게 좋지 않을까?
  console.log(projectImg);
  return (
    <>
      {isOpen ? (
        <>
          <ModalOverlay onClick={close} />
          <Content>
            <p>this is title</p>
          </Content>
        </>
      ) : null}
    </>
  );
};

export default Modal;
