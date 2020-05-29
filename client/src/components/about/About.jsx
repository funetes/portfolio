import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../utils";

const data = {
  strong: ["Html", "Css", "Javascript", "React"],
  experienced: [
    "TypeScript",
    "Mysql",
    "MaterialUI",
    "SocketIO",
    "ExpressJS",
    "Jwt",
    "Sequelize",
    "Git",
    "Redux",
    "Styled-Component",
    "Axios",
  ],
};

// height: 100vh;

//   margin-top: 30px;
//   flex-direction: column;
//   align-items: center;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-start;
  width: 80vw;
  background-color: #303960;
  padding: 1em;
  border-radius: 5px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  animation: ${fadeIn} 1s linear;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
const IntroduceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
const SkillsList = styled.ul`
  width: 100%;
  background-color: #162447;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  list-style-position: inside;
  list-style-type: circle;
  &:nth-child(2) {
    margin-left: 1px;
  }
  @media (max-width: 480px) {
    &:nth-child(2) {
      margin-left: 0;
    }
  }
`;
const SkillsItem = styled.li`
  width: 30%;
  margin: 10px auto;
  padding: 3px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>Technical Skills</Title>
      <IntroduceContainer>
        <SkillsList>
          <Title>Strong</Title>
          {data.strong.map((item, i) => (
            <SkillsItem key={i}>{item}</SkillsItem>
          ))}
        </SkillsList>
        <SkillsList>
          <Title>Experienced</Title>
          {data.experienced.map((item, i) => (
            <SkillsItem key={i}>{item}</SkillsItem>
          ))}
        </SkillsList>
      </IntroduceContainer>
    </Container>
  );
};

export default About;
