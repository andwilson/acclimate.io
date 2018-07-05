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
      <Container>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/becris" title="Becris">
            Becris
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};
