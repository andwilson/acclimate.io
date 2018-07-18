import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageHeader from "../components/PageHeader"

import ThanksSVG from "../images/thanks.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Careers</title>
    </Helmet>
    <PageHeader>
      <ThanksSVG />
      <div>
        <h1>
          <span>Thank you</span> for reaching out!
        </h1>
        <h3>
          We look forward to connecting with you soon
        </h3>
      </div>
    </PageHeader>
  </div>
);
