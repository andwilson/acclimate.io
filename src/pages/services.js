import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

import ServicesSVG from "../images/services.svg";
import { lighten } from "../../node_modules/polished";

const Top = styled.div`
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
    max-width: 650px;
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

export default () => (
  <div>
    <Helmet>
      <title>Acclimate Services</title>
    </Helmet>
    <Top>
      <ServicesSVG />
      <div>
        <h1>
          Acclimate provides end-to-end <span>services</span>
        </h1>
        <h3>
          From a free discovery session through implementation, our team at Acclimate will be with you througout your transformation process
        </h3>
      </div>
    </Top>
  </div>
);
