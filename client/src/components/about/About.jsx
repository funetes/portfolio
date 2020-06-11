import React from "react";
import data from "./data";
import {
  Container,
  IntroduceContainer,
  IntroduceWrapper,
  SkillsList,
  SkillsItem,
  StackIcon,
  AboutPage,
  StcakTitle,
} from "./styled";
import Title from "../Title/Title";

const About = () => {
  return (
    <AboutPage id="about">
      <Title title="About" />
      <Container>
        <IntroduceContainer>
          <IntroduceWrapper>
            <StcakTitle>Strong</StcakTitle>
            <SkillsList>
              {data.strong.map((item, i) => (
                <SkillsItem key={i}>
                  <StackIcon src={item} />
                </SkillsItem>
              ))}
            </SkillsList>
          </IntroduceWrapper>
          <IntroduceWrapper>
            <StcakTitle>Experienced</StcakTitle>
            <SkillsList>
              {data.experienced.map((item, i) => (
                <SkillsItem key={i}>
                  <StackIcon src={item} />
                </SkillsItem>
              ))}
            </SkillsList>
          </IntroduceWrapper>
        </IntroduceContainer>
      </Container>
    </AboutPage>
  );
};

export default About;
