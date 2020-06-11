import styled from "styled-components";

export const IMG = styled.img`
  width: 100%;
`;
export const Button = styled.button`
  all: unset;
  position: absolute;
  width: 10%;
  height: 10%;
  border-radius: 5px;
  top: 45%;
  padding: 0.5em;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;
export const RightButton = styled(Button)`
  right: 0%;
`;
export const LeftButton = styled(Button)`
  left: 0%;
`;
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  @media (max-width: 480px) {
    height: 40vh;
  }
`;
export const Pagination = styled.span`
  color: ${(props) => (props.isThat ? "red" : "#faeee7")};
  padding: 10px;
  opacity: 0.8;
  font-size: 20px;
`;
