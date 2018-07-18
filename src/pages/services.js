import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import CallToActionButton from "../components/CallToActionButton";

import ServicesSVG from "../images/services.svg";
import StrategySVG from "../images/strategy.svg";
import MachinelearningSVG from "../images/machinelearning.svg";
import DevelopmentSVG from "../images/development.svg";
import SupportSVG from "../images/support.svg";

const HorizontalAccent = styled.span`
  display: block;
  width: 50px;
  height: 3px;
  background: ${colors.primary};
  margin: 20px 0;
`;

const ServiceSection = styled.div`
  display: flex;
  align-items: center;
  > div {
  }
  > svg {
    flex: 1 0 180px;

    margin: 0 0 0 100px;
    fill: ${colors.primary};
    stroke-width: 2;
  }
  :nth-of-type(even) {
    svg {
      order: -1;
      margin: 0 100px 0 0;
    }
  }
`;

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
      </div>
      <ServicesSVG />
    </PageHeader>
    <a name="content" />
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <ServiceSection>
        <div>
          <h2>Digital Strategy</h2>
          <HorizontalAccent />
          <p>
            Volunteering your time; it pays you and your whole community
            fantastic dividends. A happy cloud. Let's build an almighty
            mountain. The first step to doing anything is to believe you can do
            it. See it finished in your mind before you ever start. And that's
            when it becomes fun - you don't have to spend your time thinking
            about what's happening - you just let it happen. Trees cover up a
            multitude of sins.
          </p>
        </div>
        <StrategySVG />
      </ServiceSection>
      <ServiceSection>
        <div>
          <h2>Data Science & ML</h2>
          <HorizontalAccent />
          <p>
            Isn't it fantastic that you can change your mind and create all
            these happy things? The more we do this - the more it will do good
            things to our heart. That is when you can experience true joy, when
            you have no fear. You can spend all day playing with mountains. Use
            your imagination, let it go.
          </p>
        </div>
        <MachinelearningSVG />
      </ServiceSection>
      <ServiceSection>
        <div>
          <h2>Application Development</h2>
          <HorizontalAccent />
          <p>
            Let your heart be your guide. The light is your friend. Preserve it.
            You could sit here for weeks with your one hair brush trying to do
            that - or you could do it with one stroke with an almighty brush.
            You need the dark in order to show the light. Pretend you're water.
            Just floating without any effort. Having a good day.
          </p>
        </div>
        <DevelopmentSVG />
      </ServiceSection>
      <ServiceSection>
        <div>
          <h2>Training & Support</h2>
          <HorizontalAccent />
          <p>
            No worries. No cares. Just float and wait for the wind to blow you
            around. Think about a cloud. Just float around and be there. Here
            we're limited by the time we have. That's a son of a gun of a cloud.
          </p>
        </div>
        <SupportSVG />
      </ServiceSection>
    </SectionWrapper>
    <SectionWrapper>
      <div>
        <h1>See how we can help your business</h1>
        <h3>
          Being a small team, we can provide custom solutions and a flexible
          arrangement
        </h3>
        <CallToActionButton to="/contact/">Get in touch</CallToActionButton>
      </div>
    </SectionWrapper>
  </div>
);
