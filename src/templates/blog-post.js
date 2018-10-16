import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { colors } from "../styles/theme";

import SectionWrapper from "../components/SectionWrapper";

const Title = styled.h1`
  color: ${colors.primary};
  margin: 0;
`;

const Date = styled.p`
  font-style: italic;
  color: grey;
`;

const Div = styled.div`
  border-top: 1px solid grey;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <SectionWrapper>
        <div>
          <Helmet title={`${post.frontmatter.title}`} />
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
          <Div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </SectionWrapper>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
