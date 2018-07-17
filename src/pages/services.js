import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import PageHeader from "../components/PageHeader"
import LearnMoreButton from "../components/LearnMoreButton";

import ServicesSVG from "../images/services.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Services</title>
    </Helmet>
    <PageHeader>
      <ServicesSVG />
      <div>
        <h1>
          Acclimate provides end-to-end <span>services</span>
        </h1>
        <h3>
          From a free discovery session through implementation, the team at Acclimate will be with you througout your transformation process
        </h3>
        <LearnMoreButton />
      </div>
    </PageHeader>
  </div>
);
