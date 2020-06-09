import styled from "styled-components";
import { fadeIn } from "../../utils";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: inherit;
  width: 80vw;
  height: 500px;
  background-color: #303960;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 1em;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
  animation: ${fadeIn} 1s linear;
`;

export const ProjectImg = styled.img`
  width: 65%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 0.2s linear;
  }
  @media (max-width: 480px) {
    height: 45%;
    width: 100%;
  }
`;

export const ProjectDescriptitonContainer = styled.div`
  width: 35%;
  height: 100%;
  background-color: #162447;
  border-radius: 5px;
  margin-left: 10px;
  padding: 15px;
  overflow-x: scroll;
  text-align: left;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin: 5px;
    height: 300px;
  }
`;
export const Title = styled.h2`
  color: #f7f7f7;
  font-size: 33px;
  margin: 18px 0px;
  text-align: center;
`;
export const Position = styled.span``;

export const StackList = styled.ul`
  margin: 3px 0px;
`;
export const Stack = styled.span`
  color: #aacfcf;
  margin: 10px 0px;
`;
export const StackIcon = styled.image`
  border: 1px solid black;
`;

export const GithubContainer = styled.div`
  text-align: left;
  margin-bottom: 3px;
`;
export const Github = styled.a`
  color: #edf492;
`;
export const DescriptionList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  list-style-type: disc;
`;
export const Description = styled.li`
  margin: 5px 0px;
`;
