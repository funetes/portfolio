import styled from "styled-components";
import { fadeIn } from "../../utils";
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: transparent;
  transform: translate(-50%, -50%);
  @media (max-width: 480px) {
    top: 40%;
    width: 90%;
  }
  animation: ${fadeIn} 0.5s linear;
`;
