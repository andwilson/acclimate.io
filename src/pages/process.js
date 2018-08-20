import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

import ProcessSVG from "../images/process.svg";

const ProcessSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  > h2 {
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 0 1em 0;;
    font-weight: 300;
    > span {
      font-weight: 500;
    }
    :nth-of-type(1) {
      > span {color: ${darken(0.15, colors.primary)};}
    }
    :nth-of-type(2) {
      > span {color: ${darken(0.05, colors.primary)};}
    }
    :nth-of-type(3) {
      > span {color: ${lighten(0.05, colors.primary)};}
    }
    :nth-of-type(4) {
      > span {color: ${lighten(0.15, colors.primary)};}
    }
  }
  > div {
    flex-basis: 60%;
    flex-grow: 1;
    margin-bottom: 2em;
    padding-left: 30px;
    margin-left: 11px
    border-left: 3px solid;
    line-height: 1.4;
    :nth-of-type(1) {
      border-color: ${darken(0.15, colors.primary)};
    }
    :nth-of-type(2) {
      border-color: ${darken(0.05, colors.primary)};
    }
    :nth-of-type(3) {
      border-color: ${lighten(0.05, colors.primary)};
    }
    :nth-of-type(4) {
      border-color: ${lighten(0.15, colors.primary)};
    }
  }
`;

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Process</title>
    </Helmet>
    <PageHeader>
      <ProcessSVG />
      <div>
        <h1>
          Acclimate has a <span>process</span> that just works
        </h1>
        <h3>
          Our consulting engagements help clients identify digital opportunities
          and build solutions that drive significant business impact.
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <ProcessSection>
          <h2>
            <span>&#9312;</span> Discovery
          </h2>
          <div>
            Do you have a complex business challenge that seem unsolvable?
            Today’s technology landscape offers powerful algorithms to address a
            new class of problems. Our experts will work with your leadership
            team to identify areas where you can gain the most leverage from
            digital solutions. Simple or complex, we’ll build a roadmap that
            works for your budget and timeline to enhance your services and
            operations.
          </div>
          <h2>
            <span>&#9313;</span> Engagement
          </h2>
          <div>
            Once we share a vision of next steps, our team will collect all the
            necessary data, perform an in-depth analysis, build requirements,
            and create an initial design. We'll present your team with a static
            report or presentation, a carefully designed wireframe, or a working
            prototype. At this stage you might have all the insights you need to
            continue forward with your strategy.
          </div>
          <h2>
            <span>&#9314;</span> Development
          </h2>
          <div>
            If building a dynamic dashboard or an intelligent app makes sense
            for your business, Acclimate can function as your data science and
            software engineering team. We can build you a robust, end-to-end
            solution that will feel like a natural extension to your business.
            We develop in an agile, modular, and scalable way using the latest
            technologies so that you can maintain and enhance your app as time
            goes on.
          </div>
          <h2>
            <span>&#9315;</span> Deployment
          </h2>
          <div>
            We believe in creating value for your employees and customers with
            as little behavior change as possible. This means your best
            knowledge workers can continue doing what they do best, enhanced by
            a sophisticated intelligent system. We'll integrate a solution
            seamlessly into your existing infrastructure and provide
            accompanying documentation, employee training, and technical
            support.
          </div>
        </ProcessSection>
      </div>
    </SectionWrapper>
  </div>
);
