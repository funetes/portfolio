import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 1);
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 480px) {
    height: 80vw;
  }
`;
export const Info = styled.p`
  padding: 10px;
`;
export const ContactForm = styled.form`
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
  margin: auto 0px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  padding: 10px;
  height: 50%;
  &:nth-child(1) {
    padding-left: 1em;
    width: 90%;
    height: 20%;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid;
    color: #ccc;
    outline: none;
  }
  &:nth-child(2) {
    height: 20%;
    margin-top: 5px;
    display: ${(props) => (props.loading ? "none" : "inline")};
  }
  @media (max-width: 480px) {
    &:nth-child(2) {
      width: 50%;
      color: white;
    }
  }
`;
export const Button = styled.button`
  height: 20%;
  margin-top: 5px;
  display: ${(props) => (props.loading ? "none" : "inline")};
  @media (max-width: 480px) {
    & {
      width: 50%;
      color: white;
    }
  }
`;
