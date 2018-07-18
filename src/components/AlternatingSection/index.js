import styled from "styled-components";
import { colors } from "../../styles/theme";

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
  }
  > svg {
    flex: 1 0 90px;
    fill: ${colors.primary};
    margin: 0;
  }
  @media (min-width: 500px) {
    flex-direction: row;
    > svg {
      flex: 1 0 180px;
      margin: 0 100px 0 0;
    }
    :nth-of-type(odd) {
      > svg {
        margin: 0 0 0 100px;
      }
      > div {
        order: -1;
      }
    }
  }
`;
