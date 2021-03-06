import React from "react";
import Helmet from "react-helmet";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import CallToActionButton from "../components/CallToActionButton";

import { colors } from "../styles/theme";

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
          Become a technology practitioner by joining Acclimate, helping
          businesses supercharge their capabilities with custom intelligent
          applications
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white}>
      <div>
        <h1>Our vision</h1>
        <p>
          We believe that technology is a pervasive force that creates massive
          opportunities for those who navigate it, and unprecedented threats to
          those who don't. Our vision is to help companies who don't have access
          to world-class data science and software engineering teams to leverage
          state-of-the-art machine learning algorithms and modern software
          toolsets to stay competitive and thrive in this new climate.
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper>
      <div>
        <h1>Our core values</h1>
        <p>
          <b>Client value creation</b>: Our core focus is to solve client
          problems and to make them operate more effectively. Seek out
          opportunities to delight customers in unique ways. Share knowledge and
          experiences with colleagues and build internal tools to increase the
          overall value we provide as a team.
        </p>
        <p>
          <b>Relationships & communication</b>: Build strong, meaningful, and
          enjoyable relationships in work and in life. To succeed, use
          technology to collaborate and deliberately over-communicate. To fail,
          use technology to isolate yourself and ignore others. Cultivate a team
          and culture that you love and find fulfilling.
        </p>
        <p>
          <b>Continous, applied learning</b>: Technology moves quickly and
          business churn is faster than ever. Always be learning and always
          apply what you've learned. Priotitize learning from conversations and
          completing practical projects over learning from texbooks and
          documentation.
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white}>
      <div>
        <h1>Join our team</h1>
        <p>
          We are always on the lookout for great talent to join our team.
          Whether part-time, full-time, remote, or on-site, reach out directly
          with a copy of your resume or a link to your LinkedIn profile if you
          are interested.
        </p>
        <CallToActionButton to="/contact">Reach out</CallToActionButton>
      </div>
    </SectionWrapper>
  </div>
);
