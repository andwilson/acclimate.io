import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageHeader from "../components/PageHeader"

import TeamSVG from "../images/team.svg";

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Team</title>
    </Helmet>
    <PageHeader>
      <TeamSVG />
      <div>
        <h1>
          Acclimate provides end-to-end <span>Team</span>
        </h1>
        <h3>
          From a free discovery session through implementation, our team at Acclimate will be with you througout your transformation process
        </h3>
      </div>
    </PageHeader>
  </div>
);
