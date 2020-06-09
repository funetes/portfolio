import React from "react";
import PropTypes from "prop-types";
import { ModalOverlay, Content } from "./styled";

const Modal = ({ isOpen, close, children }) => {
  return (
    <>
      {isOpen ? (
        <>
          <ModalOverlay onClick={close} />
          <Content>{children}</Content>
        </>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
