import React from "react";
import Helmet from "react-helmet";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import AlternatingSection from "../components/AlternatingSection";
import HorizontalAccent from "../components/HorizontalAccent";

import IndustriesSVG from "../images/industries.svg";
import ManufacturingSVG from "../images/manufacturing.svg";
import RetailSVG from "../images/retail.svg";
import LogisticsSVG from "../images/logistics.svg";
import HealthcareSVG from "../images/healthcare.svg";

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
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <a name="manufacturing" />
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
      <a name="retail" />
      <AlternatingSection>
        <div>
          <RetailSVG />
        </div>
        <div>
          <h2>Retail & e-Commerce</h2>
          <HorizontalAccentLeft />
          <p>
            Having an online presence for your retail business is only the
            beginning. Once you begin tracking key metrics on user behavior, you
            can quantify customer lifetime value and find innovative ways to
            increase it. Whether its decreasing acquisition costs, increasing
            retention, boosting spending, locking in subscriptions, optimizing
            pricing, or gaining evangelists, some simple analysis could make a
            big impact on your bottom line. New machine learning models can
            segment your customers, provide tailored recommendations, and
            extract trends and insights about your products. Targeting the right
            customer at the right time with the right product is easier and more
            powerful than ever.
          </p>
        </div>
      </AlternatingSection>
      <a name="logistics" />
      <AlternatingSection>
        <div>
          <LogisticsSVG />
        </div>
        <div>
          <h2>Supply Chain & Logistics</h2>
          <HorizontalAccentLeft />
          <p>
            Machine learning technologies offer great rewards to those who can
            keep up, but are also poised to disrupt those who cannot. Digital
            record-keeping and client interfaces are now table-stakes, but
            improved efficiencies in demand forecasting, route optimization,
            warehousing, and quality control are becoming critical to running
            your supply chain or logistics business. The good news is that it's
            completely possible to infuse your operations with intelligent
            analytics and machine learning models to supercharge your
            capabilities and stay competitive.
          </p>
        </div>
      </AlternatingSection>
      <a name="healthcare" />
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
    </SectionWrapper>
  </div>
);
