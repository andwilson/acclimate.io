import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  z-index: 2;
  background-color: ${colors.dark};
`;

const Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: auto;
  height: 100px;
  justify-content: space-between;
`;

export default () => {
  return (
    <Wrapper>
      <Container>something</Container>
    </Wrapper>
  );
};
