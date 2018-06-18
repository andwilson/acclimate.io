import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import github from "../../images/github-2.svg";
import linkedin from "../../images/linkedin-2.svg";
import instagram from "../../images/instagram-2.svg";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  border-bottom: 1px solid grey;
  padding-bottom: 15px;
`;

const Social = styled.div`
  display: flex;
  img {
    height: 35px;
    margin: 3px;
    transition: all 0.2s ease;
    &:hover {
       opacity: 0.8;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  > h1 {
    color: black;
    margin: 0;
  }
  > h3 {
    color: grey;
    margin: 0;
    font-style: italic;
    font-weight: normal;
    margin-top: 8px;
  }
  > p {
    font-size: 12px;
  }
`;

const Avatar = styled(Img)`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 0.5em;
  border: 1px solid grey;
  transition: all 0.5s ease;
  &:hover {
     box-shadow: 0px 0px 2px grey;
     opacity: 0.9;
  }
  @media (max-width: 600px) {
    width: 110px;
  }
`;

export default ({ title, description, data }) => (
  <GridContainer>
    <Profile>
      <Link to={"/about"}>
        <Avatar
          sizes={data.avatar.sizes}
        />
      </Link>
      <Social>
        <a href="https://github.com/JoshZastrow" target="_blank">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/joshua-zastrow-b8131540/" target="_blank">
          <img src={linkedin} />
        </a>
        <a href="https://www.instagram.com/josh.zastrow/?hl=en" target="_blank">
          <img src={instagram} />
        </a>
      </Social>
    </Profile>
    <Info>
      <h1>{title}</h1>
      <h3>{data.allMarkdownRemark.totalCount} posts</h3>
      <p>{description}</p>
    </Info>
  </GridContainer>
);
