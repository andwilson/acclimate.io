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
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(Link)`
  font-size: 50pt;
  border-bottom: 1px solid grey;
  @media (min-width: 500px) {
    font-size: 75pt;
  }
  @media (min-width: 850px) {
    font-size: 100pt;
  }
  text-decoration: none;
  font-weight: bold;
  > :first-child {
    color: #47878e;
  }
  > :last-child {
    color: #4b372f;
  }
  transition: all 0.5s;
  :hover {
    opacity: 0.8;
  }
  > span {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 0.5s;
  > span {
    margin: 9px 0.5em 0 0.5em;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
    font-size: 14pt;
    @media (min-width: 500px) {
      font-size: 22pt;
    }
    @media (min-width: 850px) {
      font-size: 28pt;
    }
  }
  > :first-child {
    color: #bf7c37;
  }
  :nth-child(2) {
    color: #47878e;
  }
  > :last-child {
    color: #85b84d;
  }
`;

export default ({ data }) => (
  <HeroWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <HeroContainer>
      <Title to="/about">
        <span>Acclimate</span>
      </Title>
      <Subtitle>
        <span>Data Science</span>
        <span>&</span>
        <span>Front End</span>
      </Subtitle>
    </HeroContainer>
    <Img
      style={{
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "auto",
        position: "fixed",
        top: 0,
        right: 0,
        opacity: 1
      }}
      sizes={data.background.sizes}
    />
  </HeroWrapper>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/paint-squares.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
