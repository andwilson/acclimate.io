import React from "react";
import styled from "styled-components";

import { lighten } from "polished";
import { colors } from "../../styles/theme";

import SectionWrapper from "../SectionWrapper";
import CallToActionButton from "../CallToActionButton";

import HalfLogoSVG from "../../images/half-logo.svg";

const CTAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .cls-1 {
    fill: ${lighten(0.2, colors.dark)};
  }
  svg {
    flex: 1 0;
    height: 350px;
    margin: -21px -30px -20px 0;
  }
  > div {
    flex: 1 1;
  }
  p {
    color: ${colors.light};
  }
`;

export default () => (
  <SectionWrapper backgroundColor={colors.dark} fontColor={colors.white}>
    <CTAContainer>
      <div>
        <h1>Partner with us</h1>
        <p>
          Our team provides a free discovery service, identifying opportunities
          where your company can best leverage today's best technology
        </p>
        <CallToActionButton to="/contact">Get in touch</CallToActionButton>
      </div>
      <HalfLogoSVG />
    </CTAContainer>
  </SectionWrapper>
);