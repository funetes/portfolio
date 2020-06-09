import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { projectsArr } from "../../projects";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

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
