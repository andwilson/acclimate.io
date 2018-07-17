import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { lighten, darken } from "polished";

import { colors } from "../styles/theme";

import topImage from "../images/network-4.jpg";
import StrategySVG from "../images/strategy.svg";
import MachinelearningSVG from "../images/machinelearning.svg";
import DevelopmentSVG from "../images/development.svg";
import SupportSVG from "../images/support.svg";

const Top = styled.div`
  position: relative;
  height: calc(100vh - 65px);
  width: 100vw;
  background-color: ${colors.black};
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
  backgroundColor: props => props.backgroundColor || colors.light,
  fontColor: props => props.fontColor || colors.dark
})`
  background: ${props => props.backgroundColor};
  border-top: 1px solid ${props => lighten(0.05, props.backgroundColor)};
  > div {
    max-width: 960px;
    margin: auto;
    padding: 20px;
    color: ${props => props.fontColor};
    h1,
    h2,
    h3,
    h4,
    h5 {
      ${props => props.fontColor};
    }
  }
`;

const HorizontalAccent = styled.div`
  display: block;
  width: 50px;
  height: 3px;
  background: ${colors.primary};
  margin: 20px auto;
`;

const WhySection = styled.div`
  h1 {
    text-align: center;
  }
  > div {
    display: flex;
    
    > div {
      flex-grow: 1;
      flex-basis: 0;
      padding: 10px;
      margin: 0 20px 0 0;
      &:last-of-type {
        margin: 0;
      }
    }
  }
`;

const ServicesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  > div {
    flex: 1 0;
    flex-basis: 80%;
    @media (min-width: 500px) {
      flex-basis: 40%;
    }
    @media (min-width: 910px) {
      flex-basis: 20%;
    }
    background: #ffffff;
    padding: 20px 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid ${darken(0.01, colors.light)};
    > h4 {
      text-align: center;
      font-weight: 500;
      margin: 0 0 10px 0;
    }
    > svg {
      width: 100px;
      display: block;
      margin: auto;
      fill: ${colors.medium};
      stroke: ${colors.medium};
      stroke-width: 2;
      transition: all 1s ease;
      &:hover {
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: ease;
        animation-name: draw;
        fill: ${colors.light};
      }
    }
    #strategySVG {
      stroke-dasharray: 2143;
      stroke-dashoffset: 2143;
    }
    #machinelearningSVG {
      stroke-dasharray: 3076;
      stroke-dashoffset: 3076;
    }
    #developmentSVG {
      stroke-dasharray: 7981;
      stroke-dashoffset: 7981;
    }
    #supportSVG {
      stroke-dasharray: 7262;
      stroke-dashoffset: 7262;
    }
    @keyframes draw {
      to {
        stroke-dashoffset: 0;
        fill-opacity: 1;
      }
    }
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
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <WhySection>
        <h1>Why partner with Acclimate?</h1>
        <HorizontalAccent />
        <div>
          <div>Some text 1</div>
          <div>Some text 2</div>
          <div>Some text 3</div>
        </div>
      </WhySection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Services</h1>
        <ServicesSection>
          <div>
            <h4>Digital Strategy</h4>
            <HorizontalAccent />
            <StrategySVG />
          </div>
          <div>
            <h4>Data Science & ML</h4>
            <HorizontalAccent />
            <MachinelearningSVG />
          </div>
          <div>
            <h4>Application Development</h4>
            <HorizontalAccent />
            <DevelopmentSVG />
          </div>
          <div>
            <h4>Training & Support</h4>
            <HorizontalAccent />
            <SupportSVG />
          </div>
        </ServicesSection>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.dark} fontColor={colors.white}>
      <div>
        <h1>Process</h1>
        <ol>
          <li>Discovery: lorem ipsum...</li>
          <li>Engagement: lorem ipsum...</li>
          <li>Deployment: lorem ipsum...</li>
          <li>Support: lorem ipsum...</li>
        </ol>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Industries</h1>
        <p>Add industries widget...</p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white}>
      <div>
        <h1>Team</h1>
        <p>
          We are a team of data scientists, hackers, business strategists, and
          entrepreneurs with broad experience from several different industries
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.black} fontColor={colors.white}>
      <div>
        <h1>Contact & careers</h1>
        Schedule your free business analysis today<br />
        <CallToAction to="/contact">Get in touch</CallToAction>
        <br />
        <br />
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
