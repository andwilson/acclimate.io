import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageHeader from "../components/PageHeader"

import CareersSVG from "../images/careers.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Careers</title>
    </Helmet>
    <PageHeader>
      <CareersSVG />
      <div>
        <h1>
          Gain valuable <span>career</span> experience with us
        </h1>
        <h3>
          Become a technology practicioner by joining Acclimate, helping businesses supercharge their capabilities with customized intelligent applications
        </h3>
      </div>
    </PageHeader>
  </div>
);
