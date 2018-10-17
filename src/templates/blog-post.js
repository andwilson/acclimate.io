import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { colors } from "../styles/theme";

const PostWrapper = styled.div`
  background: ${colors.white};
  > div {
    max-width: 740px;
    padding: 20px;
    margin: auto;
    color: ${colors.dark};
    blockquote {
      color: ${colors.medium};
      font-style: italic;
    }
    p {
      line-height: 1.4;
      font-size: 20px;
    }
    @media (max-width: 780px) {
      p {
        font-size: 16px;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: ${colors.dark};
    }
  }
`;

const Title = styled.h1`
  color: ${colors.secondary};
  margin: 0;
`;

const Date = styled.p`
  font-style: italic;
  color: ${colors.medium};
`;

export default ({ data }) => (
  <PostWrapper>
    <Helmet title={`${data.markdownRemark.frontmatter.title}`} />
    <div>
      <Title>{data.markdownRemark.frontmatter.title}</Title>
      <Date>{data.markdownRemark.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </PostWrapper>
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
