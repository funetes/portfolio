import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
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
const Info = styled.p`
  padding: 10px;
`;
const ContactForm = styled.form`
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
const Input = styled.input`
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
  }
  @media (max-width: 480px) {
    &:nth-child(2) {
      width: 50%;
      color: white;
    }
  }
`;

const Button = styled.button`
  height: 20%;
  margin-top: 5px;
  @media (max-width: 480px) {
    & {
      width: 50%;
      color: white;
    }
  }
`;
const ConfirmEmail = ({ sendRezume, close, setEmail }) => {
  const [confirmWords, setConfirmWords] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    sendRezume(confirmWords);
  };
  const onChange = (e) => {
    setConfirmWords(e.target.value);
  };
  const onCancel = () => {
    setEmail("");
    close();
  };
  return (
    <Container>
      <Info>email 인증을 위해 해당 email로 온 단어를 입력해주세요.</Info>
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="comfirmWords"
          onChange={onChange}
          autoComplete="off"
          placeholder="confirm words"
        />
        <Input type="submit" value="SEND" />
        <Button onClick={onCancel}>Cancel</Button>
      </ContactForm>
    </Container>
  );
};

export default ConfirmEmail;
