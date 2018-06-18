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

const Title = styled(Link)`
  font-size: 50pt;
  @media (min-width: 600px) {
    font-size: 85pt;
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
  transition: all 1s;
  :hover {
    opacity: 0.8;
  }
  > span {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

const Thanks = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 2fr;
`;

const Avatar = styled(Img)`
  margin: auto;
  width: 150px;
  border-radius: 50%;
  border: 1px solid grey;
  @media (max-width: 600px) {
    width: 110px;
  }
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
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
      <Thanks>
        <Link to="/about">
          <Avatar sizes={data.avatar.sizes} />
        </Link>
        <H1>Thanks for reaching out! We'll be in touch.</H1>
      </Thanks>
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
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
    avatar: imageSharp(id: { regex: "/linked-in-3.png/" }) {
      sizes(maxWidth: 500, grayscale: false) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    background: imageSharp(id: { regex: "/paint-squares.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
