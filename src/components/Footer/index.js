import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/theme";

import SectionWrapper from "../SectionWrapper";

export default () => (
  <SectionWrapper backgroundColor={colors.black} fontColor={colors.dark}>
    <div><h2>Footer Stuff here</h2></div>
    <div>Terms of use</div>
    <div>Privacy policy</div>
    <div>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/becris" title="Becris">
        Becris
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{" "}
      is licensed by{" "}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </div>
  </SectionWrapper>
);
