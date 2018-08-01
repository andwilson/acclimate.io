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
import ManufacturingSVG from "../images/manufacturing.svg";
import RetailSVG from "../images/retail.svg";
import LogisticsSVG from "../images/logistics.svg";
import HealthcareSVG from "../images/healthcare.svg";

const LearnMoreButton = CallToActionButton.extend`
  background: ${colors.primary};
  &:hover {
    background: ${lighten(0.04, colors.primary)};
  }
`;

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

const IconsSection = styled.div`
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
    > div {
      margin: 20px 20px 5px 0;
      font-size: 16px;
      text-align: center;
    }
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
      transition: all 0.3s ease;
      &:hover {
        fill: ${colors.light};
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
          Make <span>smart</span> business decisions
        </h1>
        <h3>
          Learn how Acclimate drives business growth with intelligent technology
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
            <h4>Build a hyper intelligent business</h4>
            <p>
              Our focus is to help you build a more intelligent business. We
              leverage our experience in business strategy, data science and
              state-of-the-art A.I. technology so you can avoid costly mistakes
              and make better decisions that scale.
            </p>
          </div>
          <div>
            <h4>Delight your customers with new offerings</h4>
            <p>
              We know technology moves very fast. Liberate yourself from
              entrenched business problems and old ideas. Adopt fresh thinking
              to create unprecedented value that drastically improves your
              bottom line.
            </p>
          </div>
          <div>
            <h4>Scale your business value creation</h4>
            <p>
              Our vision is to bring every customer-centric company into the
              future. Leverage our team to multiply the capabilities of every
              facet of your organization with advanced analytics and A.I.
              enabled products.
            </p>
          </div>
        </div>
      </WhySection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Services</h1>
        <IconsSection>
          <div>
            <h4>Digital Strategy</h4>
            <HorizontalAccent />
            <Link to="/services#strategy">
              <StrategySVG />
            </Link>
            <div>
              Custom analysis of your current technology usage, business model,
              and competitive landscape, providing you with strategies for new
              value creation and efficiency savings.
            </div>
          </div>
          <div>
            <h4>Data Science & ML</h4>
            <HorizontalAccent />
            <Link to="/services#machinelearning">
              <MachinelearningSVG />
            </Link>
            <div>
              Engineering and Data Science support. Build data-driven A.I. tools
              and insights for your organization and customers.
            </div>
          </div>
          <div>
            <h4>Application Development</h4>
            <HorizontalAccent />
            <Link to="/services#development">
              <DevelopmentSVG />
            </Link>
            <div>
              Full-stack engineering of modern web and mobile apps. Apps are
              fast, scalable, user-friendly, and adaptable.
            </div>
          </div>
          <div>
            <h4>Training & Support</h4>
            <HorizontalAccent />
            <Link to="/services#support">
              <SupportSVG />
            </Link>
            <div>
              Ongoing support for your custom strategy or data-centric
              application. Training for executives and employees on general
              technology literacy or specific technologies.
            </div>
          </div>
        </IconsSection>
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
              Understand your business and provide recommendations for points
              where you can gain the most leverage.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9313;</span> Engagement
            </h4>
            <div>
              Perform an in-depth analysis and define an actionable strategy
              with a clear purpose for implementation.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9314;</span> Development
            </h4>
            <div>
              Develop an end-to-end, custom-tailored solution for your business
              that you can use for decision-making, efficiency gains, or
              intelligent products/services
            </div>
          </div>
          <div>
            <h4>
              <span>&#9315;</span> Deployment
            </h4>
            <div>
              Provide the training and ongoing support you need to make full use
              of the tools we’ve provided. Executive and employee coaching to
              ensure that your team is on the cutting edge.
            </div>
          </div>
        </div>
        <LearnMoreButton to="/process">Learn more about our process</LearnMoreButton>
      </ProcessSection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Industries</h1>
        <p>
          We support customers across several industries where technology is
          causing major disruption to business models
        </p>
        <IconsSection>
          <div>
            <h4>Manufacturing</h4>
            <HorizontalAccent />
            <Link to="/industries#manufacturing">
              <ManufacturingSVG />
            </Link>
          </div>
          <div>
            <h4>Retail & e-Commerce</h4>
            <HorizontalAccent />
            <Link to="/industries#retail">
              <RetailSVG />
            </Link>
          </div>
          <div>
            <h4>Supply Chain & Logistics</h4>
            <HorizontalAccent />
            <Link to="/industries#logistics">
              <LogisticsSVG />
            </Link>
          </div>
          <div>
            <h4>Healthcare</h4>
            <HorizontalAccent />
            <Link to="/industries#healthcare">
              <HealthcareSVG />
            </Link>
          </div>
        </IconsSection>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white}>
      <div>
        <h1>Team</h1>
        <p>
          We are a team of data scientists, hackers, business strategists, and
          entrepreneurs with broad experience from several different industries
        </p>
        <LearnMoreButton to="/team">Learn more about our team</LearnMoreButton>
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
