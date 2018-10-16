import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { colors } from "../styles/theme";

import SectionWrapper from "../components/SectionWrapper";

const Title = styled.h1`
  color: ${colors.secondary};
  margin: 0;
`;

const Date = styled.p`
  font-style: italic;
  color: grey;
`;

const Div = styled.div`
  border-top: 1px solid grey;
`;

export default ({data}) => (

      <SectionWrapper>
        <div>
          <Helmet title={`${data.markdownRemark.frontmatter.title}`} />
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Date>{data.markdownRemark.frontmatter.date}</Date>
          <Div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </SectionWrapper>
    );

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
    }
  }
`;
