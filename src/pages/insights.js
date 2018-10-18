import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import InsightCard from "../components/InsightCard";

import InsightSVG from "../images/insight.svg";

const InsightWrapper = styled.div`
  background: ${colors.white};
  padding: 40px 0 0 0;
`;

const InsightGrid = styled.div`
  background: ${colors.white};
  display: flex;
  margin: 0 -20px;
  max-width: 960px;
  margin: auto;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Acclimate | Insights</title>
    </Helmet>
    <PageHeader>
      <InsightSVG />
      <div>
        <h1>
          Featured <span>insights</span>
        </h1>
        <h3>
          Our thinking on how businesses can succeed using the latest
          technology.
        </h3>
      </div>
    </PageHeader>
    <InsightWrapper>
      <InsightGrid>
        {data.allMarkdownRemark.edges.map(insight => {
          return <InsightCard insight={insight.node} />;
        })}
      </InsightGrid>
    </InsightWrapper>
  </div>
);

export const insightsQuery = graphql`
  query InsightsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            title
            path
            author
            date(formatString: "MMMM YYYY")
            description
            image {
              childImageSharp {
                sizes(
                  duotone: { highlight: "#E4EFF4", shadow: "#222220" }
                  maxWidth: 600
                  maxHeight: 400
                ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
