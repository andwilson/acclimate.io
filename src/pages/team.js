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
          The <span>team</span> at Acclimate is what sets us apart
        </h1>
        <h3>
          With a variety of industry experience and technical capabilities, the team at Acclimate can flex to support your unique needs and goals.
        </h3>
      </div>
    </PageHeader>
  </div>
);
