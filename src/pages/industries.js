import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import AlternatingSection from "../components/AlternatingSection";
import HorizontalAccent from "../components/HorizontalAccent";

import IndustriesSVG from "../images/industries.svg";
import ManufacturingSVG from "../images/manufacturing.svg";
import RetailSVG from "../images/retail.svg";
import FinanceSVG from "../images/finance.svg";
import HealthcareSVG from "../images/healthcare.svg";
import HumanResourcesSVG from "../images/hr.svg";
import TechnologySVG from "../images/technology.svg";
import TransportationSVG from "../images/transportation.svg";
import TravelSVG from "../images/travel.svg";

const HorizontalAccentLeft = HorizontalAccent.extend`
  margin: 20px 0;
`;

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
          Whether you look to acquire and retain customers, improve efficiency,
          automate operations, or create delightful experiences, the team at
          Acclimate can help
        </h3>
      </div>
    </PageHeader>
    <a name="content" />
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <AlternatingSection>
        <div>
          <ManufacturingSVG />
        </div>
        <div>
          <h2>Manufacturing</h2>
          <HorizontalAccentLeft />
          <p>
            Manufacturing is positioned to see enormous disruption from applied
            A.I research. Image recognition tools for automating and enhancing
            visual defect inspections, Anomaly detection on the product floor
            for preventing unscheduled downtime, or a learned scheduling agent
            for predicting lead times and scheduling start dates can drastically
            improve your physical processes.
          </p>
          <p>
            Acclimate is developing production prediction Machine Learning
            models that help optimize manufacturing processes. With AI, once
            your company engages Acclimate we help to create models that learn
            and improve over time.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <RetailSVG />
        </div>
        <div>
          <h2>Retail</h2>
          <HorizontalAccentLeft />
          <p>
            Would you like a better understanding the trends in your product
            line, and the segments of customers who like to shop with you? What
            aspects of your offerings keep customers coming back and staying?
            Today’s technology can optimize the shopping experience for each
            unique customer. Image Recognition systems can draw new insight from
            your product line, and these features combined with customer
            activity can drive recommendation engines that dramatically increase
            your sales.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <FinanceSVG />
        </div>
        <div>
          <h2>Finance</h2>
          <HorizontalAccentLeft />
          <p>
            From stock market prediction to fraud detection, Acclimate can help
            your business gain competitive advantages by leveraging advances in
            AI technologies. We specialize in building high value customized
            solutions to solve real business problems.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <HealthcareSVG />
        </div>
        <div>
          <h2>Healthcare</h2>
          <HorizontalAccentLeft />
          <p>
            Delivering a diagnosis takes considerable energy from specialists
            with limited time. Modern learning algorithms can use visual
            understanding of patient scans to assist in screening and deliver
            insights that extend the capabilities of your clinicians. Deliver
            more accurate diagnoses to a larger patient base in less time.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <HumanResourcesSVG />
        </div>
        <div>
          <h2>Human Resources</h2>
          <HorizontalAccentLeft />
          <p>
            No worries. No cares. Just float and wait for the wind to blow you
            around. Think about a cloud. Just float around and be there. Here
            we're limited by the time we have. That's a son of a gun of a cloud.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <TransportationSVG />
        </div>
        <div>
          <h2>Transportation</h2>
          <HorizontalAccentLeft />
          <p>
            No worries. No cares. Just float and wait for the wind to blow you
            around. Think about a cloud. Just float around and be there. Here
            we're limited by the time we have. That's a son of a gun of a cloud.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <TechnologySVG />
        </div>
        <div>
          <h2>Technology</h2>
          <HorizontalAccentLeft />
          <p>
            The Acclimate team has extensive experience in architecting,
            developing and launching global technology solutions using Agile
            principles. We believe in providing our customers with cutting-edge
            technology to allow them to compete effectively in the marketplace
            and grow.
          </p>
        </div>
      </AlternatingSection>
      <AlternatingSection>
        <div>
          <TravelSVG />
        </div>
        <div>
          <h2>Travel</h2>
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
