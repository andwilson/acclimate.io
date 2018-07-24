import styled from "styled-components";
import { lighten } from "polished";
import { colors } from "../../styles/theme";

export default styled.div.attrs({
  backgroundColor: props => props.backgroundColor || colors.light,
  fontColor: props => props.fontColor || colors.dark
})`
  background: ${props => props.backgroundColor};
  border-top: 1px solid ${props => lighten(0.05, props.backgroundColor)};
  > div {
    max-width: 960px;
    margin: auto;
    padding: 40px 20px;
    color: ${props => props.fontColor};
    h1,
    h2,
    h3,
    h4,
    h5 {
      ${props => props.fontColor};
      margin-top: 0;
    }
  }
`;
