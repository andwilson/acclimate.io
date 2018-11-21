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

export default class BlogPost extends React.Component {
  getAvatar(author) {
    if (author === "Andrew Wilson") {
      return this.props.data.aw;
    }
    if (author === "Josh Zastrow") {
      return this.props.data.jz;
    }
    if (author === "Zach Litif") {
      return this.props.data.zl;
    }
    if (author === "Jonas Linden") {
      return this.props.data.jl;
    }
    return this.props.data.aw;
  }

  render() {
    const post = this.props.data.markdownRemark.html;
    const frontmatter = this.props.data.markdownRemark.frontmatter;
    return (
      <PostWrapper>
        <Helmet title={frontmatter.title}>
          <meta name="description" content={frontmatter.description} />
          <meta name="image" content={frontmatter.image.childImageSharp.sizes.src} />
          <meta property="og:url" content={`https://www.acclimate.io/${frontmatter.path}`} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:description" content={frontmatter.description} />
          <meta property="og:image" content={frontmatter.image.childImageSharp.sizes.src} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={frontmatter.title} />
          <meta name="twitter:description" content={frontmatter.description} />
          <meta name="twitter:image" content={frontmatter.image.childImageSharp.sizes.src} />
        </Helmet>
        <Banner sizes={frontmatter.image.childImageSharp.sizes} />
        <PostContainer>
          <h1>{frontmatter.title}</h1>
          <Subtitle>{frontmatter.description}</Subtitle>
          <Author
            avatar={this.getAvatar(frontmatter.author)}
            name={frontmatter.author}
            date={frontmatter.date}
          />
          <div dangerouslySetInnerHTML={{ __html: post }} />
          <Author
            avatar={this.getAvatar(frontmatter.author)}
            name={frontmatter.author}
            date={frontmatter.date}
          />
        </PostContainer>
      </PostWrapper>
    );
  }
}

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
        path
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
