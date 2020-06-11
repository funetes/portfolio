import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
const HomePage = styled.div`
  width: 100vw;
  /* height: 100vh; */
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Main = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  text-align: left;
  @media (max-width: 480px) {
    width: 85%;
  }
`;
const Paragraph = styled.p`
  margin: 15px 0px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 50px;
  margin: 50px 0px;
`;
const Home = () => {
  return (
    <HomePage id="home">
      <Title title="About Me" />
      <Main>
        <Wrapper>
          <Paragraph>처음 프로그래밍을 접했을때가 기억이 납니다.</Paragraph>
          <Paragraph>
            프로그래밍이 생소했던 저는 c언어, java, sql...여러 수업을 들으며,
            <br />
            <br />
            그땐 과연 이런걸로 무엇을 할수 있을까? 내가 잘 하고 있는것이 맞을까?
            <br />
            <br />
            감조차 잡히지 않았던 시절인 것 같습니다.
            <br />
            <br />
            사실 흥미가 많이 없었습니다.
          </Paragraph>
          <Icon>{"🤔"}</Icon>
          <Paragraph>
            {" "}
            Web을 접하면서 간단하고 빠르게 만드는 페이지, 화려한 효과들에 재미를
            <br />
            <br />
            느끼며 조금더 이 분야를 공부하고 싶다는 생각이 들게 되었습니다.
            <br />
            <br />
            그렇습니다. "흥미"라는 것이 생긴것이지요.
          </Paragraph>
          <Icon>{"😃"}</Icon>
          <Paragraph>
            Web에 대해 조금더 찾아보고, 조금 더 알고 싶었습니다.
          </Paragraph>
          <Paragraph>
            알아야 할것도 많았지만 오히려 배움에서 오는 즐거움을 느낄수가
            있었던것 같습니다.
          </Paragraph>
          <Icon>{"🧑‍💻"}</Icon>
          <Paragraph>
            어느덧 html, css, javascript뿐만 아니라 backend와 frontend 전반을
            공부하게 되었고,
            <br />
            <br />
            많이는 아니지만 팀원들과 함께한 프로젝트들도 생기게 되었습니다.
            <br />
            <br />
            앞으로도 공부할 것이 많을 것이고 저는 계속 그 즐거움을 느끼면서
            살아가고 싶습니다.
          </Paragraph>
        </Wrapper>
      </Main>
    </HomePage>
  );
};

export default Home;
