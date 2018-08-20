import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

import ProcessSVG from "../images/process.svg";

const ProcessSection2 = styled.div`
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
    margin-left: 12px
    border-left: 3px solid blue;
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
          Our consulting engagements follow a typical process, but can be
          customized to suit your unique needs and timeline
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <ProcessSection2>
          <h2>
            <span>&#9312;</span> Discovery
          </h2>
          <div>
            Do you have a complex business challenge that seem unsolvable?
            Today’s technology landscape offers pow erful algorithms to address
            a new class of problems. Our expert consultants walk you through
            your business and current industry technology leverage points to
            layout a roadmap for enhancing your services and operations.
          </div>
          <h2>
            <span>&#9313;</span> Engagement
          </h2>
          <div>
            We use the roadmap and take a deeper dive into the business
            operations to address a use case with a clear purpose. From here we
            engage with your subject-matter experts and stakeholders to specify
            how the cognitive system will fit into your organization. We develop
            a clear understanding of how workers and customers will interact
            with the system.
          </div>
          <h2>
            <span>&#9314;</span> Development
          </h2>
          <div>
            Our team is agile and well versed in the latest available solutions.
            We function as your data science team, engineering an end-to-end
            solution that will feel like a natural extension to your business.
            We value team culture and enjoy consistent communication with open
            collaboration, so you will feel that our work is part of a single
            company initiative.
          </div>
          <h2>
            <span>&#9315;</span> Deployment
          </h2>
          <div>
            We strive to leverage modern technology to build robust systems that
            “just work”. We have a keen interest in User Experience, and believe
            in as little behavior change as possible. This means your best
            knowledge workers can continue doing what they do best, enhanced by
            a sophisticated intelligent system. We fully stand by our work, and
            back our systems with measured results.
          </div>
        </ProcessSection2>
      </div>
    </SectionWrapper>
  </div>
);
