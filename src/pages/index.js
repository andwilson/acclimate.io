import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

const H1 = styled.h1`
  color: ${colors.primary};
`;

export default ({ data }) => (
  <div>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
  </Helmet>
  <H1>Acclimate Consulting</H1>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
