import styled from "styled-components";
import { colors } from "../../styles/theme";

export default styled.div`
  display: flex;
  align-items: flex-start;
  > div {
    
  }
  > svg {
    flex: 1 0 80px;
    fill: ${colors.primary};
    margin-right: 20px;
  }
  @media (min-width: 650px) {
    flex-direction: row;
    align-items: center;
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