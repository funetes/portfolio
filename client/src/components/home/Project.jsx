import React, { useState } from "react";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";
import Slider from "../slider/Slider";
import {
  Container,
  ProjectImg,
  ProjectDescriptitonContainer,
  Title,
  Position,
  StackList,
  Stack,
  GithubContainer,
  Github,
  DescriptionList,
  Description,
} from "./styled";

const Project = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleImgClick = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
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
      <Modal isOpen={openModal} close={closeModal}>
        <Slider projectImg={project.images} />
      </Modal>
    </Container>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
