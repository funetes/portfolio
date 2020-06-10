import styled from "styled-components";
import { fadeIn } from "../../utils";
export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-start;
  width: 80vw;
  height: 80vh;
  background-color: #303960;
  padding: 1em;
  border-radius: 5px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  animation: ${fadeIn} 1s linear;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-size: 25px;
  }
`;
export const IntroduceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const IntroduceWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: 30% 30% 30%;
  height: 100%;
  width: 100%;
  background-color: #162447;
  padding: 10px;
  text-align: left;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 70vw;
    height: 240px;
    grid-template-rows: 35% 35% 35%;
  }
`;
export const SkillsItem = styled.li`
  padding: 3px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const StackIcon = styled.img`
  width: 80%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
