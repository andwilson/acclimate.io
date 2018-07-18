import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import SectionWrapper from "../components/SectionWrapper";
import CallToActionButton from "../components/CallToActionButton";
import HorizontalAccent from "../components/HorizontalAccent";

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
    color: ${colors.white};
    > span {
      color: ${colors.secondary};
      font-style: italic;
    }
  }
  > h3 {
    color: ${colors.white};
    font-weight: 300;
  }
`;

const WhySection = styled.div`
  h1 {
    text-align: center;
  }
  > div {
    display: flex;
    align-content: space-between;
    flex-direction: column;
    margin: 0 -10px;
    @media (min-width: 650px) {
      flex-direction: row;
    }
    > div {
      flex: 1;
      padding: 10px;
      margin: 0 10px;
      text-align: center;
      > h4 {
        margin-top: 0;
      }
      p {
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
    svg {
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

const ProcessSection = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    margin: 0 -20px;
    @media (min-width: 650px) {
      flex-direction: row;
    }
    > div {
      :nth-of-type(1) {
        border-color: ${darken(0.15, colors.primary)};
        span {
          color: ${darken(0.15, colors.primary)};
        }
      }
      :nth-of-type(2) {
        border-color: ${darken(0.05, colors.primary)};
        span {
          color: ${darken(0.05, colors.primary)};
        }
      }
      :nth-of-type(3) {
        border-color: ${lighten(0.05, colors.primary)};
        span {
          color: ${lighten(0.05, colors.primary)};
        }
      }
      :nth-of-type(4) {
        border-color: ${lighten(0.15, colors.primary)};
        span {
          color: ${lighten(0.15, colors.primary)};
        }
      }
      border-left: 3px solid ${colors.primary};
      flex: 1;
      margin: 20px;
      padding-left: 20px;
      @media (min-width: 650px) {
        border-top: 3px solid ${colors.primary};
        border-left: none;
        padding: 20px 0 0 0;
      }
      > h4 {
        margin-top: 0;
      }
      > svg {
        fill: ${colors.secondary};
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
        <CallToActionButton to="/contact">Get in touch</CallToActionButton>
      </div>
    </Top>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <WhySection>
        <h1>Why partner with Acclimate?</h1>
        <HorizontalAccent />
        <div>
          <div>
            <h4>Scale Your Business Value Creation</h4>
            <p>
              Our vision is to bring every customer-centric company into the
              future. Our mission is your mission, acclimated to “State of the
              Art” Technology and shifted into overdrive.
            </p>
          </div>
          <div>
            <h4>Build For the Next Generation</h4>
            <p>
              Our focus is helping you build a more intelligent business.
              Leverage business strategy, data science and State-Of-The-Art A.I
              technology to make data-driven decisions that will build the
              company of the future.
            </p>
          </div>
          <div>
            <h4>Beat The Status Quo</h4>
            <p>
              We share a perpetual excitement for emerging technologies. How
              they create opportunities and disrupt at every turn. Partner with
              us to create unprecedented value that outperforms the solutions of
              yesterday.
            </p>
          </div>
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
            <Link to="/services#content">
              <StrategySVG />
            </Link>
          </div>
          <div>
            <h4>Data Science & ML</h4>
            <HorizontalAccent />
            <Link to="/services#content">
              <MachinelearningSVG />
            </Link>
          </div>
          <div>
            <h4>Application Development</h4>
            <HorizontalAccent />
            <Link to="/services#content">
              <DevelopmentSVG />
            </Link>
          </div>
          <div>
            <h4>Training & Support</h4>
            <HorizontalAccent />
            <Link to="/services#content">
              <SupportSVG />
            </Link>
          </div>
        </ServicesSection>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <ProcessSection>
        <h1>Process</h1>
        <div>
          <div>
            <h4>
              <span>&#9312;</span> Discovery
            </h4>
            <div>
              That's what makes life fun. That you can make these decisions.
              That you can create the world that you want. Just let your mind
              wander and enjoy. This should make you happy.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9313;</span> Engagement
            </h4>
            <div>
              You better get your coat out, this is going to be a cold painting.
              In painting, you have unlimited power. You have the ability to
              move mountains. You can bend rivers.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9314;</span> Development
            </h4>
            <div>
              The least little bit can do so much. That's a crooked tree. We'll
              send him to Washington. I really believe that if you practice
              enough you could paint the 'Mona Lisa' with a two-inch brush.{" "}
            </div>
          </div>
          <div>
            <h4>
              <span>&#9315;</span> Deployment
            </h4>
            <div>
              If you've been in Alaska less than a year you're a Cheechako. Just
              think about these things in your mind and drop em' on canvas.
            </div>
          </div>
        </div>
      </ProcessSection>
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
    <SectionWrapper backgroundColor={colors.dark} fontColor={colors.white}>
      <div>
        <h1>Partner with us</h1>
        Schedule your free business analysis today<br />
        <CallToActionButton to="/contact">Get in touch</CallToActionButton>
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
