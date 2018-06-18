import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 1;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export default ({ data }) => (
  <HeroWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <HeroContainer>
      <h1>Acclimate Consulting</h1>
    </HeroContainer>
  </HeroWrapper>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
