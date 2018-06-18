import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 1;
`;

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 960px;
  z-index: 2;
`;

const H1 = styled.h1`
  align-self: center;
  color: #47878e;
  margin: 0;
`;

export default ({ data }) => (
  <HeroWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <HeroContainer>
        <H1>Thanks for reaching out! We'll be in touch.</H1>
    </HeroContainer>
  </HeroWrapper>
);

export const pageQuery = graphql`
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
