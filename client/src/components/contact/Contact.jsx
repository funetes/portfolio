import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "../../utils";

const Contatiner = styled.div`
  width: 50vw;
  height: 50vh;
  border: 1px solid white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 80vw;
  }
  animation: ${fadeIn} 1s linear;
`;
const Title = styled.h3`
  margin: auto 0px;
  font-size: 30px;
`;
const ContactForm = styled.form`
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
    /* height: 30vh; */
    /* flex-direction: column;
    justify-content: flex-start; */
  }
`;

const Input = styled.input`
  height: 50%;
  &:nth-child(1) {
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
const Info = styled.p`
  margin: 10px 0px;
`;
const Contact = () => {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      return;
    }
    e.target[0].value = "";
    // open modal or snack bar
    console.log("submit!");
    setEmail("");
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Contatiner>
      <Title>Contact</Title>
      <Info>if you write your email to this, i`will send my rezume.</Info>
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          onChange={onChange}
          autoComplete="off"
          placeholder="Write Your Email..."
        />
        <Input type="submit" value="SEND" />
      </ContactForm>
    </Contatiner>
  );
};

export default Contact;
