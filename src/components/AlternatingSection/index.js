import styled from "styled-components";
import { colors } from "../../styles/theme";

export default styled.div`
  display: flex;
  align-items: center;
  > div {
  }
  > svg {
    flex: 1 0 180px;

    margin: 0 0 0 100px;
    fill: ${colors.primary};
    stroke-width: 2;
  }
  :nth-of-type(even) {
    svg {
      order: -1;
      margin: 0 100px 0 0;
    }
  }
`;