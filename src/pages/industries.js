import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageHeader from "../components/PageHeader"

import IndustriesSVG from "../images/industries.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Industries</title>
    </Helmet>
    <PageHeader>
      <IndustriesSVG />
      <div>
        <h1>
          Technology strategy is vital in all <span>industries</span>
        </h1>
        <h3>
          Whether you look to acquire and retain customers, improve efficiency, automate operations, or create delightful experiences, the team at Acclimate can help
        </h3>
      </div>
    </PageHeader>
  </div>
);
