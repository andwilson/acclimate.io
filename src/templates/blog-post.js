import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";

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

const BannerContainer = styled.div`
`;

const BannerImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
`;

const Date = styled.p`
  font-style: italic;
  color: ${colors.medium};
`;

export default ({ data }) => (
  <PostWrapper>
    <Helmet title={`${data.markdownRemark.frontmatter.title}`} />
    <BannerContainer>
      <BannerImage
        sizes={data.markdownRemark.frontmatter.image.childImageSharp.sizes}
      />
    </BannerContainer>
    <PostContainer>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Date>{data.markdownRemark.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
        image {
          childImageSharp {
            sizes(
              duotone: { highlight: "#E4EFF4", shadow: "#222220" }
              maxWidth: 1200
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
