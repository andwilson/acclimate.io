import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import AlternatingSection from "../components/AlternatingSection";
import HorizontalAccent from "../components/HorizontalAccent";

import ServicesSVG from "../images/services.svg";
import StrategySVG from "../images/strategy.svg";
import MachinelearningSVG from "../images/machinelearning.svg";
import DevelopmentSVG from "../images/development.svg";
import SupportSVG from "../images/support.svg";

const HorizontalAccentLeft = HorizontalAccent.extend`
  margin: 20px 0;
`;

const ServiceHeaderContainer = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  > svg {
    flex: 0 0 120px;
    height: 120px;
    width: 120px;
    fill: ${colors.primary};
    margin-right: 1em;
  }
  > div {
    flex: 1 1;
    > h2 {
    }
    > p {
      font-style: italic;
      margin: 0;
    }
  }
`;

const ServiceItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
  > div {
    flex: 1 0 300px;
    h4 {
      color: ${colors.secondary};
      margin: 0 0 0.2em 0;
    }
    p {
      margin: 0;
    }
    margin: 0 1em 1.5em 1em;
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
          Acclimate will be with you throughout your transformation process
        </h3>
      </div>
      <ServicesSVG />
    </PageHeader>
    <a name="content" />
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <StrategySVG />
          <div>
            <h2>Business Strategy</h2>
            <p>
              Motion isn't always progress. In today’s rapidly changing climate,
              your business must continuously adapt in order to survive. The
              best investment you can make is to step back and develop a
              strategy to thrive. Acclimate provides strategy consulting
              services with a keen understanding of the current digital
              landscape.
            </p>
          </div>
        </ServiceHeaderContainer>
        <ServiceItemContainer>
          <div>
            <h4>Data exploration and insights</h4>
            <p>
              You’re already sitting on a treasure trove of data. It’s highly
              likely that there are low-hanging opportunities to create massive
              value hiding in plain sight.
            </p>
          </div>
          <div>
            <h4>Technology stack advice</h4>
            <p>
              The sheer number of technologies available can be overwhelming,
              let alone understanding how they all fit together. Get advice from
              our experts on what technologies best fit your unique needs and
              existing infrastructure.
            </p>
          </div>
          <div>
            <h4>Ecosystem mapping</h4>
            <p>
              Understand the birds-eye view of your industry. Visually map your
              competitors, suppliers, partners, and customers and see the flow
              of goods, value, and information amongst them.
            </p>
          </div>
          <div>
            <h4>Customer discovery</h4>
            <p>
              Everything you do should start with the customer. Get to know your
              customers on a much deeper level by asking them the right
              questions to uncover their pains and needs.
            </p>
          </div>
          <div>
            <h4>Design thinking</h4>
            <p>
              Already have an intractable problem in mind? Get a grip on
              potential solutions by empathizing with your customers and rapidly
              prototyping your ideas.
            </p>
          </div>
          <div>
            <h4>Business model innovation</h4>
            <p>
              Incremental gains are important, but will only take your business
              so far. Uncover creative business models to create new value and
              shake up your industry.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <MachinelearningSVG />
          <div>
            <h2>Data Science & Machine Learning</h2>
            <p>
              Recent innovations in machine learning research are poised to
              substantially transform companies within the next three years.
              Adopting these powerful algorithms into your organization may be
              the difference between surviving and thriving in the rapidly
              changing technology landscape. Acclimate ensures you exceed the
              hype and drive your capabilities forward with measurably
              successful business intelligence.
            </p>
          </div>
        </ServiceHeaderContainer>
        <ServiceItemContainer>
          <div>
            <h4>Dynamic Dashboards</h4>
            <p>
              Gain insight on business processes, quantify key performance
              indicators, and visualize the health of your operations.
            </p>
          </div>
          <div>
            <h4>A.I. Systems</h4>
            <p>
              Automate routine analysis and enhance decision making with data
              tools. Use machines to infer and recommend the best options for
              your workers and customers.
            </p>
          </div>
          <div>
            <h4>Reporting Services</h4>
            <p>
              Make informed strategic decisions with data-driven insights from
              visual, interpretable reports. Schedule regular reports on
              internal operations or leverage expert analysis for exploring new
              opportunities within your business.
            </p>
          </div>
          <div>
            <h4>Data Infrastructure</h4>
            <p>
              Build the architecture necessary for an A.I powered company.
              Engineer data pipelines, data warehouses and automated processing
              systems to deliver clean information to the people who need it the
              most.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <AlternatingSection>
        <div>
          <DevelopmentSVG />
        </div>
        <div>
          <h2>Application Development</h2>
          <HorizontalAccentLeft />
          <p>
            Let your heart be your guide. The light is your friend. Preserve it.
            You could sit here for weeks with your one hair brush trying to do
            that - or you could do it with one stroke with an almighty brush.
            You need the dark in order to show the light. Pretend you're water.
            Just floating without any effort. Having a good day.
          </p>
        </div>
      </AlternatingSection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <AlternatingSection>
        <div>
          <SupportSVG />
        </div>
        <div>
          <h2>Training & Support</h2>
          <HorizontalAccentLeft />
          <p>
            No worries. No cares. Just float and wait for the wind to blow you
            around. Think about a cloud. Just float around and be there. Here
            we're limited by the time we have. That's a son of a gun of a cloud.
          </p>
        </div>
      </AlternatingSection>
    </SectionWrapper>
  </div>
);
