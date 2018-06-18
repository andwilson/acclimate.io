import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import "../styles/normalize.css";
import "../styles/base.css";

import favicon from "../images/favicon.ico";

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 0 12px 12px 12px;
`;

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Container>{children()}</Container>
      </div>
    );
  }
}

export default Layout;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
