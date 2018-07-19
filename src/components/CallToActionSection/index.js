import React from "react";

import { colors } from "../../styles/theme";

import SectionWrapper from "../SectionWrapper";
import CallToActionButton from "../CallToActionButton";

export default () => (
  <SectionWrapper backgroundColor={colors.dark} fontColor={colors.white}>
    <div>
      <h1>Partner with us</h1>
      Schedule your free business analysis today<br />
      <CallToActionButton to="/contact">Get in touch</CallToActionButton>
    </div>
  </SectionWrapper>
);
