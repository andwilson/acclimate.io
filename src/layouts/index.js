import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Headroom from "react-headroom";

import "../styles/normalize.css";
import "../styles/base.css";

import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";

import favicon from "../images/favicon.ico";

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Headroom><Navigation data={data} /></Headroom>
      <div>{children()}</div>
    </div>
  );
};

export default Layout;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        shortName
      }
    }
    logo: imageSharp(id: { regex: "/logo-light.png/" }) {
      sizes(maxWidth: 100, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
