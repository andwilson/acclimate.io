import styled from "styled-components";
import { colors } from "../../styles/theme";

export default styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
  svg {
    fill: ${colors.primary};
  }
  > div:first-child {
    flex: 0 0 100px;
    margin: 0 20px 0 0;
  }
  > div:last-child {
   flex: 1 0;
  }
  @media (min-width: 650px) { 
    align-items: center;
    > div:first-child {
      flex: 0 0 180px;
      margin: 0 50px 0 0;
    }
    > div:last-child {
     flex: 1 0;
    }
    :nth-of-type(odd) {
      > div:first-child {
        order: 1;
        margin: 0 0 0 50px;
      }
    }
  }
`;