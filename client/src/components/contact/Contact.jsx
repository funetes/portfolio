import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "../../utils";
import Modal from "../modal/Modal";
import ConfirmEmail from "./ConfirmEmail";
import axios from "axios";

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
  }
`;
const Input = styled.input`
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
const Info = styled.p`
  margin: 10px 0px;
`;

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [rezumeSended, setRezumeSended] = useState(false);
  const [sendMsg, setSendMsg] = useState("");
  const handleErrMsg = (msg) => {
    setErrMsg(msg);
    setTimeout(() => {
      setError(false);
    }, 3000);
    setTimeout(() => {
      setErrMsg("");
    }, 3000);
  };
  const sendConfirmWordsToThisEmail = async (email) => {
    console.log("dd", email);
    return await axios.post("http://localhost:3001/", {
      email,
    });
  };
  const requstRezume = async (words, email) => {
    console.log("dd", email);
    return await axios.post("http://localhost:3001/comfirm", {
      words,
      email,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
      handleErrMsg("올바른 email을 적어주세요.");
      return null;
    }
    try {
      sendConfirmWordsToThisEmail(email);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      e.target[0].value = "";
    }
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const sendRezume = async (words) => {
    try {
      await requstRezume(words, email);
      setSendMsg("해당 메일로 이력서가 전송되었습니다. 감사합니다.");
      setRezumeSended(true);
      setTimeout(() => {
        setRezumeSended(false);
      }, 3000);
    } catch (error) {
      handleErrMsg("전송에 실패했습니다.");
    } finally {
      closeModal();
      setEmail("");
    }
  };

  return (
    <Contatiner>
      <Title>Contact</Title>
      <Info>이 곳에 email을 작성해주시면, 제 이력서를 보내드립니다.</Info>
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="email"
          onChange={onChange}
          autoComplete="off"
          placeholder="Write Your Email..."
        />
        <Input type="submit" value="SEND" />
      </ContactForm>
      <Modal isOpen={openModal} close={closeModal}>
        <ConfirmEmail
          sendRezume={sendRezume}
          close={closeModal}
          setEmail={setEmail}
        />
      </Modal>
      {error ? errMsg : null}
      {rezumeSended ? sendMsg : null}
    </Contatiner>
  );
};

export default Contact;
