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
  margin-bottom: 1.5em;
  > span {
    flex: 0 0 100px;
    height: 100px;
    width: 100px;
    margin-right: 1em;
  }
  > div {
    flex: 1 1;
    > h2 {
    }
    > p {
      font-style: italic;
      margin: 0;
    }
  }
  :nth-of-type(1) {
    > span {
      
    }
    > div {
        border-color: ${darken(0.15, colors.primary)};
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
          A consulting engagement follows a typical process, but it can be
          customized to suit your unique needs and timeline
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <ProcessSection>
        <h1>Process</h1>
        <div>
          <div>
            <h4>
              <span>&#9312;</span> Discovery
            </h4>
            <div>
              Do you have a complex business challenge that seem unsolvable?
              Today’s technology landscape offers powerful algorithms to address
              a new class of problems. Our expert consultants walk you through
              your business and current industry technology leverage points to
              layout a roadmap for enhancing your services and operations.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9313;</span> Engagement
            </h4>
            <div>
              We use the roadmap and take a deeper dive into the business
              operations to address a use case with a clear purpose. From here
              we engage with your subject-matter experts and stakeholders to
              specify how the cognitive system will fit into your organization.
              We develop a clear understanding of how workers and customers will
              interact with the system.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9314;</span> Development
            </h4>
            <div>
              Our team is agile and well versed in the latest available
              solutions. We function as your data science team, engineering an
              end-to-end solution that will feel like a natural extension to
              your business. We value team culture and enjoy consistent
              communication with open collaboration, so you will feel that our
              work is part of a single company initiative.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9315;</span> Deployment
            </h4>
            <div>
              We strive to leverage modern technology to build robust systems
              that “just work”. We have a keen interest in User Experience, and
              believe in as little behavior change as possible. This means your
              best knowledge workers can continue doing what they do best,
              enhanced by a sophisticated intelligent system. We fully stand by
              our work, and back our systems with measured results.
            </div>
          </div>
        </div>
      </ProcessSection>
    </SectionWrapper>
  </div>
);
