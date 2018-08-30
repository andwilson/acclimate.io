import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

import ServicesSVG from "../images/services.svg";
import StrategySVG from "../images/strategy.svg";
import MachinelearningSVG from "../images/machinelearning.svg";
import DevelopmentSVG from "../images/development.svg";
import SupportSVG from "../images/support.svg";

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
          From a free discovery session to implementation, the team at Acclimate
          will be with you throughout your transformation process
        </h3>
      </div>
      <ServicesSVG />
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <a name="strategy" />
          <StrategySVG />
          <div>
            <h2>Business Strategy</h2>
            <p>
              Motion isn't always progress. In today’s rapidly changing climate,
              your business must continuously adapt in order to survive. The
              best investment you can make is to step back and carefully
              consider your next moves. Acclimate provides strategy consulting
              services with a deep understanding of the current digital
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
            <h4>IT Audit</h4>
            <p>
              The sheer number of technologies available can be overwhelming,
              let alone understanding how they all fit together. Understand what
              technologies best fit your unique needs and existing
              infrastructure.
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
            <h4>Customer discovery</h4>
            <p>
              Get out of the building and speak with your customers. Uncover
              pains and needs that you didn't know existed by asking the right
              questions.
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
            <h4>Technical due diligence</h4>
            <p>
              Avoid buying a lemon. Assess the technical architecture of
              potential mergers and acquisitions and analyze easy opportunities
              for savings or new value creation.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <a name="machinelearning" />
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
              Gain real-time insight on business processes, quantify key
              performance indicators, and visualize the health of your
              operations.
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
              Build the architecture necessary for an A.I. powered company.
              Engineer data pipelines, data warehouses and automated processing
              systems to deliver clean information to the people who need it the
              most.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <a name="development" />
          <DevelopmentSVG />
          <div>
            <h2>Application Development</h2>
            <p>
              It seems like there’s an app for everything these days, but not
              for your most important business processes. The team at Acclimate
              specializes in building custom, user friendly web and mobile apps
              to help you with decision-making. From a simple static website to
              a complex A.I. first mobile app, we can help.
            </p>
          </div>
        </ServiceHeaderContainer>
        <ServiceItemContainer>
          <div>
            <h4>Web Apps</h4>
            <p>
              Build useful internal tools on top of your data, or build a simple
              and beautiful website to convey a strong brand to your customers.
            </p>
          </div>
          <div>
            <h4>Mobile Apps</h4>
            <p>
              80% of Americans own smartphones, and that number is quickly on
              the rise worldwide. Extend your reach and capabilities to mobile
              with an iPhone or Android app.
            </p>
          </div>
          <div>
            <h4>User Experience</h4>
            <p>
              We start with the user in mind, ensuring that our apps are
              intuitive and easy to use. Having an app that looks great and
              matches your branding comes standard.
            </p>
          </div>
          <div>
            <h4>Modern Tools</h4>
            <p>
              Our apps make use of all the most recent technology, making them
              modular, adaptable, scalable, reliable, and secure.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <ServiceHeaderContainer>
          <a name="support" />
          <SupportSVG />
          <div>
            <h2>Training & Support</h2>
            <p>
              Flex your engineering team with a world class data science team.
              Acclimate offers workshops for executives and managers on emerging
              technologies as well as technical support on new ventures and
              complex projects.
            </p>
          </div>
        </ServiceHeaderContainer>
        <ServiceItemContainer>
          <div>
            <h4>State of Artificial Intelligence</h4>
            <p>
              What can A.I technology really do for you? Familiarize yourself
              with the latest advancements in research and what it takes to
              leverage these technologies in business.
            </p>
          </div>
          <div>
            <h4>Blockchain Technologies</h4>
            <p>
              Smart contracts and decentralized ledgers stand to radically
              change how record keeping is performed. Our workshops walk you
              through what blockchain is and how it works in practice.
            </p>
          </div>
          <div>
            <h4>Engineering Support</h4>
            <p>
              Quickly expand your engineering capabilities for mission critical
              projects and receive continued support and maintenance on
              functioning systems.
            </p>
          </div>
          <div>
            <h4>Data Science Support</h4>
            <p>
              Train your team in data science with business critical skills like
              data visualization, data wrangling, statistical modeling and
              engineering a production ready pipeline.
            </p>
          </div>
        </ServiceItemContainer>
      </div>
    </SectionWrapper>
  </div>
);
