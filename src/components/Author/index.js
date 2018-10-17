import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { colors } from "../../styles/theme";

const Container = styled.div`
  display: flex;
  margin: 30px 0;
  > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
  }
`;

const Avatar = styled(Img)`
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.span`
  font-weight: 400;
`;

const Date = styled.span`
  color: ${colors.medium};
  font-style: italic;
`;

export default props => (
  <Container>
    <Avatar sizes={props.avatar.sizes} />
    <div>
      <Name>{props.name}</Name>
      <Date>{props.date}</Date>
    </div>
  </Container>
);
