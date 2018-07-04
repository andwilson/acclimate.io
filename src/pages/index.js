import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

// import PageContainer from "../components/PageContainer"

import { colors } from "../styles/theme";

import topImage from "../images/network-3.jpg";

const Top = styled.div`
  position: relative;
  height: calc(100vh - 65px);
  width: 100vw;
  background-color: ${colors.dark};
  background: url(${topImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    max-width: 940px;
    margin: auto;
    padding: 0 10px 10px 10px;
  > h1, h3 {
    color: ${colors.light};
  }
  > h3 {
    font-weight: 300;
  }
`;

const Thinking = styled.div`
  background: ${colors.light};
  > div {
    max-width: 960px;
    margin: auto;
    padding: 10px;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.longName}</title>
    </Helmet>
    <Top>
      <div>
        <h1>Acclimate Consulting</h1>
        <h3>Your in-house data science team</h3>
        <button type="button">Contact us</button>
      </div>
    </Top>
    <Thinking>
      <div>
        <h2>Our Thinking</h2>
        <p>We think about lots of things!</p>
      </div>
    </Thinking>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        shortName
        longName
      }
    }
    topImage: imageSharp(id: { regex: "/network-3.png/" }) {
      sizes(maxWidth: 1000, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
