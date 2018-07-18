import styled from "styled-components";
import Link from "gatsby-link";

import { lighten } from "polished";
import { colors } from "../../styles/theme";

export default styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  border: none;
  color: ${colors.white};
  font-size: 16px;
  background: ${colors.secondary};
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  &:after {
    content: "\u2192";
    display: inline-block;
    margin-left: 5px;
    transition: all 0.3s ease;
  }
  transition: all 0.3s ease;
  &:hover {
    background: ${lighten(0.04, colors.secondary)};
  }
  &:hover:after {
    transform: scaleY(1.5);
  }
`;