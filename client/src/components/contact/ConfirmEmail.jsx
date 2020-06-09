import React, { useState } from "react";
import {
  Container,
  Info,
  ContactForm,
  Input,
  Button,
} from "./ConfirmEmailStyled";

const ConfirmEmail = ({ sendRezume, close, setEmail, email, loading }) => {
  const [confirmWords, setConfirmWords] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    sendRezume(confirmWords, email);
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
      <Info>인증을 위해 email로 온 단어를 입력해주세요.</Info>
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="comfirmWords"
          onChange={onChange}
          autoComplete="off"
          placeholder="confirm words"
        />
        <Input type="submit" value="SEND" loading={loading} />
        <Button onClick={onCancel} loading={loading}>
          Cancel
        </Button>
      </ContactForm>
    </Container>
  );
};

export default ConfirmEmail;
