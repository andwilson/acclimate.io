import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";

import Author from "../components/Author";

import { colors } from "../styles/theme";

const PostWrapper = styled.div`
  background: ${colors.white};
`;

const PostContainer = styled.div`
    max-width: 740px;
    padding: 20px;
    margin: auto;
    color: ${colors.dark};
    blockquote {
      color: ${colors.medium};
      font-style: italic;
      font-family: "alegreya";
    }
    p {
      line-height: 1.5;
      font-size: 16pt;
    }
    @media (max-width: 780px) {
      p {
        font-size: 14pt;
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

const Banner = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
`;

const Subtitle = styled.span`
  color: ${colors.medium};
  font-style: italic;
  font-size: 18pt;
  font-family: "alegreya";
`;

// const Name = data.markdownRemark.frontmatter.author;

export default ({ data }) => (
  <PostWrapper>
    <Helmet title={data.markdownRemark.frontmatter.title} />
    <Banner
      sizes={data.markdownRemark.frontmatter.image.childImageSharp.sizes}
    />
    <PostContainer>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Subtitle>{data.markdownRemark.frontmatter.description}</Subtitle>
      <Author
        avatar={data.aw}
        name={data.markdownRemark.frontmatter.author}
        date={data.markdownRemark.frontmatter.date}
      />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <Author
        avatar={data.aw}
        name={data.markdownRemark.frontmatter.author}
        date={data.markdownRemark.frontmatter.date}
      />
    </PostContainer>
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
        description
        image {
          childImageSharp {
            sizes(
              duotone: { highlight: "#E4EFF4", shadow: "#222220" }
              maxWidth: 1200
            ) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    zl: imageSharp(id: { regex: "/zl.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    aw: imageSharp(id: { regex: "/aw.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    jl: imageSharp(id: { regex: "/jl.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    jz: imageSharp(id: { regex: "/jz.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    at: imageSharp(id: { regex: "/at.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
