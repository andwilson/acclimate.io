import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import FA from "react-fontawesome";

import ContactForm from "../components/ContactForm";

import github from "../images/github-2.svg";
import linkedin from "../images/linkedin-2.svg";
import instagram from "../images/instagram-2.svg";

import resume from "./andrew-wilson-resume.pdf";

const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-top: 20px;
  grid-template:
    "avatar title"
    "description description"
    "contact contact"
    "resume resume"
    "social social"
    "form form" / 1fr 2fr;
  @media (min-width: 600px) {
    grid-template:
      "avatar title"
      "contact description"
      "social description"
      "resume form" / 1fr 2fr;
  }
`;

const Avatar = styled(Img)`
  grid-area: avatar;
  margin: auto;
  width: 150px;
  border-radius: 50%;
  border: 1px solid grey;
  @media (max-width: 600px) {
    width: 110px;
  }
`;

const Title = styled.h1`
  grid-area: title;
  align-self: center;
  color: black;
  margin: 0;

  > span {
    color: #47878e;
  }
`;

const Description = styled.p`
  grid-area: description;
  margin: 0;
  padding-bottom: 1em;
  border-bottom: 1px solid grey;
`;

const Contact = styled.div`
  grid-area: contact;
  margin: auto;
  > h2 {
    margin: 0 0 0.5em 0;
  }
  > p {
    margin: 0 0 0.5em 0;
    color: grey;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  grid-area: social;
  border-bottom: 1px solid grey;
  img {
    height: 40px;
    margin: 0 15px 15px 15px;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Form = styled.div`
  grid-area: form;
`;

const Resume = styled.div`
  grid-area: resume;
  justify-self: center;
  margin: 10px 0 20px 0;
  > a {
    color: white;
    border-radius: 5px;
    border: 1px solid #3e2e27;
    background-color: #4b372f;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 7px
    :hover {
      opacity: 0.8;
    }
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>About</title>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </Helmet>
    <Grid>
      <Avatar sizes={data.avatar.sizes} />
      <Title>
        Hi. My name is <span>Andrew Wilson</span>.
      </Title>
      <Description>
        My professional journey evolved from an early obsession with graphic and
        web design to where I am now: using data science to solve hard problems.
        Somewhere in-between I discovered my love of startup culture and
        business strategy, as well as technology’s profound impact on just about
        everything. My work involves using the internet and machine learning to
        create things that improve the human experience. When I’m not online,
        you’ll probably find me snowboarding, discovering new places, snapping
        photos, or cooking with friends.
      </Description>
      <Contact>
        <p>
          <FA name="phone-square" /> +1 (508) 826-5524
        </p>
        <p>
          <FA name="envelope-square" /> anddwilson@gmail.com
        </p>
      </Contact>
      <Social>
        <a href="https://github.com/andwilson" target="_blank">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/anddwilson/" target="_blank">
          <img src={linkedin} />
        </a>
      </Social>
      <Resume>
        <a href={resume} download="andrew-wilson-resume.pdf">
          Download resume <FA name="arrow-circle-down" />
        </a>
      </Resume>
      <Form>
        <ContactForm />
      </Form>
    </Grid>
  </div>
);

export const pageQuery = graphql`
  query AboutQuery {
    avatar: imageSharp(id: { regex: "/linked-in-3.png/" }) {
      sizes(maxWidth: 500, grayscale: false) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
