import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import LearnMoreButton from "../components/LearnMoreButton";

import ServicesSVG from "../images/services.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Services</title>
    </Helmet>

    <PageHeader>
      <div>
        <h1>
          Acclimate provides end-to-end <span>services</span>
        </h1>
        <h3>
          From a free discovery session through implementation, the team at
          Acclimate will be with you througout your transformation process
        </h3>
        <LearnMoreButton />
      </div>
      <ServicesSVG />
    </PageHeader>
  </div>
);
