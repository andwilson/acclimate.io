import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import HorizontalAccent from "../components/HorizontalAccent";
import SectionWrapper from "../components/SectionWrapper";
import AlternatingSection from "../components/AlternatingSection";

import TeamSVG from "../images/team.svg";

const HorizontalAccentLeft = HorizontalAccent.extend`
  margin: 20px 0;
`;

const Portrait = styled(Img)`
  border-radius: 50%;
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Acclimate | Team</title>
    </Helmet>
    <PageHeader>
      <TeamSVG />
      <div>
        <h1>
          The <span>team</span> at Acclimate is what sets us apart
        </h1>
        <h3>
          With a variety of industry experience and technical capabilities, the
          team at Acclimate can flex to support your unique needs and goals.
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <h2>
          Custom digital strategies and end-to-end applications requires strong
          expertise and collaboration
        </h2>
        <p>
          Some info about why we work well together as a team and what we
          believe
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <h1>Our story</h1>
        <p>
          Some info about our backstory and why we work well together as a team
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <h1>The partners</h1>
        <AlternatingSection>
          <div>
            <Portrait sizes={data.zl.sizes} />
          </div>
          <div>
            <h2>Zach Litif</h2>
            <HorizontalAccentLeft />
            <p>
              A thinker, strategizer, and trailblazer, with a background in
              intellectual property litigation, and a knack for capacity
              building. From working with startup nonprofits to Fortune 100
              companies, Zach analyzes the culture and organizational behavior
              to taylor specific strategies for organizational effectiveness and
              sustainable scaling.
            </p>
          </div>
        </AlternatingSection>
        <AlternatingSection>
          <div>
            <Portrait sizes={data.aw.sizes} />
          </div>
          <div>
            <h2>Andrew Wilson</h2>
            <HorizontalAccentLeft />
            <p>
              Technology is a powerful and pervasive force. Customer discovery
              and data analytics should drive strategy. Systems thinking leads
              to adaptable and scalable architectures/platforms. The pace of
              change offers countless opportunities to those who can keep up.
            </p>
          </div>
        </AlternatingSection>
        <AlternatingSection>
          <div>
            <Portrait sizes={data.jl.sizes} />
          </div>
          <div>
            <h2>Jonas Linden</h2>
            <HorizontalAccentLeft />
            <p>
              Leader with demonstrated success at defining strategy and
              directing teams to develop and manage product lines used by
              companies such as Black Rock, eBay, Comcast and Louis Vuitton.
            </p>
          </div>
        </AlternatingSection>
        <AlternatingSection>
          <div>
            <Portrait sizes={data.jz.sizes} />
          </div>
          <div>
            <h2>Josh Zastrow</h2>
            <HorizontalAccentLeft />
            <p>
              A passionate Machine Learning Engineer with a keen interest in
              deployed Artificial Intelligence Systems. Josh draws experience
              from several years in the Manufacturing industry, building out
              internal business intelligence and analytics solutions. He
              specializes in Machine Learning and Data Analytics and operates
              under Lean Principles. Outside of his A.I passion, Josh is an avid
              traveler, skier and enthusiast for thought-provoking
              conversations.
            </p>
          </div>
        </AlternatingSection>
        <AlternatingSection>
          <div>
            <Portrait sizes={data.at.sizes} />
          </div>
          <div>
            <h2>Andrew Takao</h2>
            <HorizontalAccentLeft />
            <p>
              Andrew is a results-oriented mobile and web application developer.
              Born in Japan, Andrew has a unique cultural upbringing of both
              Japan and America. A Northeastern Graduate of Mechanical
              Engineering, Andrew has discovered a love for programming and has
              been building mobile applications for happy clients around the
              Boston area. Some of his interesting projects include leveraging
              Alexa’s developer kit for voice controlled HVAC systems and an MIT
              startup that utilizes MBTA public transit for digital city tour
              guides. These days he works primarily as a freelance mobile
              developer in Boston.
            </p>
          </div>
        </AlternatingSection>
      </div>
    </SectionWrapper>
  </div>
);

export const pageQuery = graphql`
  query TeamQuery {
    zl: imageSharp(id: { regex: "/zl.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    aw: imageSharp(id: { regex: "/aw.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    jl: imageSharp(id: { regex: "/jl.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    jz: imageSharp(id: { regex: "/jz.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    at: imageSharp(id: { regex: "/at.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
