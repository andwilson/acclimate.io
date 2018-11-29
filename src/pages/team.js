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
          Our <span>team</span> has a complementary skillset
        </h1>
        <h3>
          With a variety of industry experience and technical capabilities, the
          team at Acclimate can flex to support your unique needs and goals.
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <h1>Our story</h1>
        <p>
          As colleagues and peers within Boston's Venture Cafe network, the
          Acclimate team formed from a common vision in emerging technologies
          and an enthusiasm for innovating on stale business processes. The
          partners come from Coro Fellowship, MIT Sloan business program,
          leading strategy consulting firms, and technical startups with
          educational backgrounds in business and engineering. Our approach is
          interdisciplinary and personal, with a rigorous focus on adding value
          to your customers and stakeholders.
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
              to tailor specific strategies for organizational effectiveness and
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
              Turning data into insights, Andrew spent 4 years consulting with
              the world’s largest technology companies developing actionable
              business strategies. Holding a B.A. in Industrial Engineering from
              Northeastern University, he sees the system-level perspective yet
              appreciates the finer details of user-centric design. Andrew also
              draws from his startup experience, having worked as a software
              developer at an MIT spinoff and coaching student-run ventures.
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
              under Lean Principles. Outside of his A.I. passion, Josh is an avid
              traveler, skier and enthusiast for thought-provoking
              conversations.
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
              enterprise companies world wide. Expert in incubating businesses
              from ideation to full scale global production by leading global
              development and cross-functional teams.
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
