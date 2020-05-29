import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const IMAGE = require("../../img/intro.png");

const projectsArr = [
  {
    src: IMAGE,
    images: [IMAGE, IMAGE, IMAGE, IMAGE],
    title: "Questionnaire",
    position: "back-end",
    stack: ["React", "SocketIO", "Mysql", "Sequelize", "AWS-RDS", "AWS-EC2"],
    gitHub: "https://github.com/funetes/QuestRunner-client-mirrored",
    description: [
      "익명 질문자 질의응답(Q&A) 서비스",
      "DB스키마 설계, 작성과 Mysql - Sequelize를 이용하여 DB Table 구성",
      "AWS-RDS 배포로 클라우드 환경에서 DB 접근 가능하도록 구성",
      "익명 사용자를 구별하여 좋아요 Toggle 구현",
      "실시간으로 질의응답과 좋아요가 가능하도록 Socket IO를 이용하여 구현",
      "Front-end 와 Back-end 전반에 걸쳐 Socket IO Endpoint Api 작성",
      "익명 사용자마다 고유한 값을 localStorage에 저장후, 해당 값을 DB Table 에 저장",
      "Jwt Token사용으로 별도의 저장소 없이 사용자 인증기능 구현",
    ],
  },
  {
    src: IMAGE,
    title: "questionnaire",
    images: ["a", "b", "c", "d"],
    position: "back-end",
    stack: ["React", "SocketIO", "Mysql", "Sequelize", "AWS-RDS", "AWS-EC2"],
    gitHub: "https://github.com/funetes/QuestRunner-client-mirrored",
    description: [
      "익명 질문자 질의응답(Q&A) 서비스",
      "DB스키마 설계, 작성과 Mysql - Sequelize를 이용하여 DB Table 구성",
      "AWS-RDS 배포로 클라우드 환경에서 DB 접근 가능하도록 구성",
      "실시간으로 질의응답과 좋아요가 가능하도록 Socket IO를 이용하여 구현",
      "Front-end 와 Back-end 전반에 걸쳐 Socket IO Endpoint Api 작성",
      "익명 사용자마다 고유한 값을 localStorage에 저장후, 해당 값을 DB Table 에 저장",
      "익명 사용자를 구별하여 좋아요 Toggle 구현",
      "Jwt Token사용으로 별도의 저장소 없이 사용자 인증기능 구현",
      "Front-end 와 Back-end 전반에 걸쳐 Socket IO Endpoint Api 작성",
      "익명 사용자마다 고유한 값을 localStorage에 저장후, 해당 값을 DB Table 에 저장",
      "익명 사용자를 구별하여 좋아요 Toggle 구현",
      "Jwt Token사용으로 별도의 저장소 없이 사용자 인증기능 구현",
    ],
  },
  {
    src: IMAGE,
    title: "Questionnaire",
    images: ["a", "b", "c", "d"],
    position: "back-end",
    stack: ["React", "SocketIO", "Mysql", "Sequelize", "AWS-RDS", "AWS-EC2"],
    gitHub: "https://github.com/funetes/QuestRunner-client-mirrored",
    description: [
      "익명 질문자 질의응답(Q&A) 서비스",
      "DB스키마 설계, 작성과 Mysql - Sequelize를 이용하여 DB Table 구성",
      "AWS-RDS 배포로 클라우드 환경에서 DB 접근 가능하도록 구성",
      "실시간으로 질의응답과 좋아요가 가능하도록 Socket IO를 이용하여 구현",
      "Front-end 와 Back-end 전반에 걸쳐 Socket IO Endpoint Api 작성",
      "익명 사용자마다 고유한 값을 localStorage에 저장후, 해당 값을 DB Table 에 저장",
      "익명 사용자를 구별하여 좋아요 Toggle 구현",
      "Jwt Token사용으로 별도의 저장소 없이 사용자 인증기능 구현",
    ],
  },
];

const Home = () => {
  return (
    <Container>
      {projectsArr.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </Container>
  );
};

export default Home;
