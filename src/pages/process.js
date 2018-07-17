import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import PageHeader from "../components/PageHeader";

import ProcessSVG from "../images/process.svg";

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
          A consulting engagement follows a typical process, but it can be customized to suite your unique needs and timeline
        </h3>
      </div>
    </PageHeader>
  </div>
);
