import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../utils";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: inherit;
  width: 80vw;
  background-color: #303960;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 1em;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: inherit;
  }
  animation: ${fadeIn} 1s linear;
`;

const ProjectImg = styled.img`
  width: 65%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const ProjectDescriptitonContainer = styled.div`
  width: 35%;
  background-color: #162447;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
  overflow-x: scroll;
  text-align: left;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin: 5px;
    height: 200px;
  }
`;
const Title = styled.h2`
  color: black;
  font-size: 33px;
  margin: 18px 0px;
  text-align: center;
`;
const Position = styled.span``;
const StackList = styled.ul`
  margin: 3px 0px;
`;
const Stack = styled.span`
  color: #aacfcf;
`;
const GithubContainer = styled.div`
  text-align: left;
  margin-bottom: 3px;
`;
const Github = styled.a`
  color: #edf492;
`;
const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  list-style-type: disc;
`;
const Description = styled.li`
  /* text-align: left; */
  margin: 3px 0px;
`;
const Project = ({ project }) => {
  const handleImgClick = () => {
    console.log("clicked");
  };
  return (
    <Container>
      <ProjectImg src={project.src} onClick={handleImgClick} />
      <ProjectDescriptitonContainer>
        <Title>{project.title}</Title>
        <Position>Position : {project.position} </Position>
        <StackList>
          {" "}
          Stack :{" "}
          {project.stack.map((stack, i) => (
            <Stack key={i}>
              {i === project.stack.length - 1 ? `${stack}` : `${stack} /`}{" "}
            </Stack>
          ))}
        </StackList>
        <GithubContainer>
          Github :{" "}
          <Github href={project.gitHub} target="_blank">
            {project.title}
          </Github>
        </GithubContainer>
        <DescriptionList>
          {project.description.map((description, i) => (
            <Description key={i}>{description}</Description>
          ))}
        </DescriptionList>
      </ProjectDescriptitonContainer>
    </Container>
  );
};

export default Project;
