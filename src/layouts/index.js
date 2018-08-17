import React from "react";
import Helmet from "react-helmet";
import Headroom from "react-headroom";

import "../styles/normalize.css";
import "../styles/base.css";

import Navigation from "../components/Navigation";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

import favicon from "../images/logo.png";

export default ({ location, children }) => {
  let bottom;
  if (location.pathname === "/contact" || location.pathname === "/thanks") {
    bottom = null;
  } else {
    bottom = (
      <div>
        <CallToActionSection />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="description" content="Acclimate Consulting website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Headroom>
        <Navigation />
      </Headroom>
      <div>{children()}</div>
      {bottom}
    </div>
  );
};

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        shortName
      }
    }
  }
`;
