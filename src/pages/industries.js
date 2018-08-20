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
          All <span>industries</span> are affected by technology
        </h1>
        <h3>
          All companies will have to adapt their technology to keep up, but only
          some will leverage machine learning to excel faster than the
          competition.
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
<<<<<<< HEAD
            A.I. research. Acclimate is currently developing predictive machine
            learning models that help optimize manufacturing processes. We offer
            a range of machine learning systems to improve your production
            efficiency and reduce escapes, including visual defect detection,
            machine monitoring, and learning-based scheduling agents.
=======
            A.I research. Acclimate offers a range of machine learning systems
            to improve your production efficiency and reduce escapes, including
            visual defect detection, machine monitoring, and learning-based
            scheduling agents. 
          </p>
          <p>
            Acclimate is developing production prediction Machine Learning
            models that help optimize manufacturing processes. Once your company
            engages Acclimate, we use AI to create models that learn and improve
            over time.
>>>>>>> a1b6fd72552b708dee040a0093abb3677a94b7b6
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
            extract trends and insights about your products.
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
            Digital record-keeping and client-facing apps are now table-stakes,
            but improved efficiencies in demand forecasting, route optimization,
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
