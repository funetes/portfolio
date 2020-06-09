import React from "react";
import data from "./data";
import {
  Container,
  Title,
  IntroduceContainer,
  IntroduceWrapper,
  SkillsList,
  SkillsItem,
  StackIcon,
} from "./styled";

const About = () => {
  return (
    <Container>
      <Title>Technical Skills</Title>
      <IntroduceContainer>
        <IntroduceWrapper>
          <Title>Strong</Title>
          <SkillsList>
            {data.strong.map((item, i) => (
              <SkillsItem key={i}>
                <StackIcon src={item} />
              </SkillsItem>
            ))}
          </SkillsList>
        </IntroduceWrapper>
        <IntroduceWrapper>
          <Title>Experienced</Title>
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
  );
};

export default About;
