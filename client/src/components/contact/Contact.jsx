import React, { useState } from "react";
import { validateEmail } from "../../utils";
import Modal from "../modal/Modal";
import ConfirmEmail from "./ConfirmEmail";
import axios from "axios";
import { Contatiner, Title, ContactForm, Input, Info } from "./ContactStyled";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rezumeSended, setRezumeSended] = useState(false);
  const [sendMsg] = useState(
    "해당 메일로 이력서가 전송되었습니다. 감사합니다."
  );
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
    try {
      await axios.post("http://localhost:3001/rezume", {
        email,
      });
    } catch (error) {
      setError(true);
      closeModal();
      handleErrMsg("이미 해당 email로 이력서를 전송하였습니다.");
    }
  };
  const sendRezume = async (word, email) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:3001/rezume/comfirm", {
        word,
        email,
      });
      setRezumeSended(true);
      setTimeout(() => {
        setRezumeSended(false);
      }, 3000);
    } catch (error) {
      setError(true);
      if (error.response.data.status === 403) {
        handleErrMsg("이미 해당 email로 이력서를 전송하였습니다.");
      } else {
        handleErrMsg("전송에 실패했습니다. 다시 시도하세요.");
      }
    } finally {
      setLoading(false);
      closeModal();
      setEmail("");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
      setEmail("");
      handleErrMsg("올바른 email을 적어주세요.");
    } else {
      sendConfirmWordsToThisEmail(email);
      setOpenModal(true);
      e.target[0].value = "";
    }
  };
  const onChange = (e) => setEmail(e.target.value);
  const closeModal = () => setOpenModal(false);

  return (
    <Contatiner>
      <Title>Contact</Title>
      <Info>email을 작성해 주시면, 이력서를 보내드립니다.</Info>
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="email"
          onChange={onChange}
          autoComplete="off"
          placeholder="Write Your Email..."
        />
        <Input type="submit" value="SEND" />
        {error ? errMsg : null}
        {rezumeSended ? sendMsg : null}
      </ContactForm>
      <Modal isOpen={openModal} close={closeModal}>
        <ConfirmEmail
          sendRezume={sendRezume}
          close={closeModal}
          setEmail={setEmail}
          email={email}
          loading={loading}
        />
      </Modal>
    </Contatiner>
  );
};

export default Contact;
