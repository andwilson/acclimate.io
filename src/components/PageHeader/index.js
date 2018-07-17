import styled from "styled-components";
import { lighten } from "polished"
import { colors } from "../../styles/theme";

export default styled.div`
  position: relative;
  height: calc(100vh - 65px);
  width: 100vw;
  background-color: ${colors.black};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
      fill-opacity: 0;
      position: fixed;
      height: calc(100vh - 65px - 100px);
      stroke: ${lighten(0.1, colors.black)};
      stroke-width: 3;
      animation-duration: 15s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-timing-function: ease;
      stroke-dasharray: 5882;
      stroke-dashoffset: 5882;
      animation-name: draw;
  }
  @keyframes draw
     {
      to {
        stroke-dashoffset: 0;
      }
    }
  > div {
    z-index: 2;
    max-width: 700;
    margin: auto;
    padding: 0 10px 10px 10px;
    > h1 {
        color: #ffffff;
        > span {
        color: ${colors.secondary};
        font-style: italic;
        } 
    }
    > h3 {
        color: #ffffff;
        font-weight: 300;
  }
`;
