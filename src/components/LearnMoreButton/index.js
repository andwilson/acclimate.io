import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

import DownArrowSVG from "../../images/down-arrow.svg";

const Container = styled.div`
  svg {
    display: block;
    margin: 50px auto 0;
    height: 90px;
    width: 90px;
    box-shadow: 2px;
    fill-opacity: 0;
    animation: FadeIn 5s forwards ease, MoveUpDown 2.5s infinite ease-in-out;
    .circle {
      fill: ${colors.secondary};
    }
    .arrow {
      fill: ${colors.light};
    }
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  @keyframes FadeIn {
    to {
      fill-opacity: 1;
    }
  }
`;

export default () => (
  <Container>
    <DownArrowSVG />
  </Container>
);
