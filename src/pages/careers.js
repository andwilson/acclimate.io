import React from "react";
import Helmet from "react-helmet";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

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
          Become a technology practicioner by joining Acclimate, helping
          businesses supercharge their capabilities with customized intelligent
          applications
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper>
      <div>
        <h1>Join our team</h1>
        <p>
          We are always on the lookout for great talent to join our team. Become
          a technology practicioner by joining Acclimate, helping businesses
          supercharge their capabilities with customized intelligent
          applications. Reach out directly with a copy of your resume or a link
          to your LinkedIn profile if you are interested.
        </p>
      </div>
    </SectionWrapper>
  </div>
);
