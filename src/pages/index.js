import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { lighten, darken } from "polished";

import { colors } from "../styles/theme";

import topImage from "../images/network-3.jpg";
import strategy from "../images/strategy.svg";
import machinelearning from "../images/machinelearning.svg";
import development from "../images/development.svg";
import support from "../images/support.svg";

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
    max-width: 960px;
    margin: auto;
    padding: 0 10px 10px 10px;
  > h1 {
    color: #ffffff;
    > span {
      color: ${colors.secondary};
      font-style: italic;
    }
  }
  > h3 {
    color: #ffffff;
    font-weight: 300;
  }
`;

const CallToAction = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  border: none;
  color: #ffffff;
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

const SectionWrapper = styled.div.attrs({
  background: props => props.background || colors.light
})`
  background: ${props => props.background};
  border-top: 1px solid ${props => lighten(0.05, props.background)};
  > div {
    max-width: 960px;
    margin: auto;
    padding: 20px;
    > h2 {
      margin: 0 0 20px 0;
    }
  }
`;

const Services = styled.div`
  display: flex;
  }
  > div {
    flex-grow: 1;
    flex-basis: 0;
    background: #ffffff;
    padding: 10px;
    margin: 0 20px 0 0;
    border-radius: 5px;
    border: 1px solid ${darken(0.05, colors.light)};
    &:last-of-type {
      margin: 0;
    }
    > h4 {
      text-align: center;
      font-weight: 500;
      margin: 0 0 10px 0;
    }
    > img {
      width: 100px;
      display: block;
      margin: auto;
      fill: ${colors.secondary};
    }
  }
`;

const LightText = styled.div`
  color: #ffffff;
  > h1,
  h2,
  h3,
  h4 {
    color: #ffffff;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.longName}</title>
    </Helmet>
    <Top>
      <div>
        <h1>
          Make <span>intelligent</span> business decisions
        </h1>
        <h3>
          Acclimate Consulting drives ROI in your business with the latest
          technologies
        </h3>
        <CallToAction to="/contact">Get in touch</CallToAction>
      </div>
    </Top>
    <SectionWrapper background={colors.light}>
      <div>
        <h2>Services</h2>
        <Services>
          <div>
            <h4>Digital Strategy</h4>
            <img src={strategy} />
          </div>
          <div>
            <h4>Data Science & Machine Learning</h4>
            <img src={machinelearning} />
          </div>
          <div>
            <h4>Application Development</h4>
            <img src={development} />
          </div>
          <div>
            <h4>Training & Support</h4>
            <img src={support} />
          </div>
        </Services>
      </div>
    </SectionWrapper>
    <SectionWrapper background={colors.dark}>
      <LightText>
        <h2>Process</h2>
        <ol>
          <li>Discovery: lorem ipsum...</li>
          <li>Engagement: lorem ipsum...</li>
          <li>Deployment: lorem ipsum...</li>
          <li>Support: lorem ipsum...</li>
        </ol>
      </LightText>
    </SectionWrapper>
    <SectionWrapper background={colors.light}>
      <div>
        <h2>Industries</h2>
        <p>
          Add industries widget...
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper background={colors.dark}>
      <LightText>
        <h2>Team</h2>
        <p>
          We are a team of data scientists, hackers, business strategists, and
          entrepreneurs with broad experience from several different industries
        </p>
      </LightText>
    </SectionWrapper>
    <SectionWrapper background={colors.light}>
      <div>
        <h2>Contact & careers</h2>
        Schedule your free business analysis today<br />
        <CallToAction to="/contact">Get in touch</CallToAction>
        <br /><br />
        If you'd like to join our team...
      </div>
    </SectionWrapper>
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
