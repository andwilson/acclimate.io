import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

import ProcessSVG from "../images/process.svg";

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
          customized to suite your unique needs and timeline
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
  </div>
);
