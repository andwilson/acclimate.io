import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  background-color: ${colors.medium};
  margin-bottom: 18px;
  -webkit-box-shadow: 0px 0px 3px 0px #ccc;
  -moz-box-shadow: 0px 0px 3px 0px #ccc;
  box-shadow: 0px 0px 3px 0px #ccc;
`;

const NavBar = styled.div`
  display: flex;
  max-width: 960px;
  margin: auto;
  padding: 10px;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
`;

const TLink = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s ease;
  &:hover {
    -ms-transform: translate(0px, -1px);
    -webkit-transform: translate(0px, -1px);
    transform: translate(0px, -1px);
    color: #FFFFFF;
  }
`;

const Logo = styled(Img)`
  margin-right: 10px;
  width: 40px;
  transition: all 0.4s ease;
  &: hover {
    transform: rotate(72deg);
  }
`;

const About = styled.button`
  background: none;
  border: none;  
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  transition: all 0.2s ease;
  &:hover {

    color: #FFFFFF;
  }
`;

const Company = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 0 20px;
  transition: all 0.2s ease;
  &:hover {
    color: #FFFFFF;
  }
`;

const Contact = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 0 20px;
  transition: all 0.2s ease;
  &:hover {
    color: #FFFFFF;
  }
`;

const ADrop = styled.div`
  position: absolute;
  background: ${colors.medium};
  display: none;
  ${About}:hover & {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    display: flex;
    flex-direction: column;
  }
`;

const CDrop = styled.div`
  position: absolute;
  background: ${colors.medium};
  display: none;
  ${Company}:hover & {
    display: flex;
    flex-direction: column; 
  }
  &:hover {
    display: flex;
    flex-direction: column;
  }
`;

const SLink = styled(Link)`
  background: none;
  border: none;  
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
  margin: 0;
  transition: all 0.2s ease;
  &:hover {
    color: #FFFFFF;
  }
`;

export default ({ data }) => (
  <Wrapper>
    <NavBar>
      <Title>
        <Link to={"/"}>
          <Logo
            sizes={data.logo.sizes}
          />
        </Link>
        <TLink to={"/"}>
          {data.site.siteMetadata.title}
        </TLink>
      </Title>
      <Nav>
        <About>
          About
        <ADrop>
            <SLink>Services</SLink>
            <SLink>Process</SLink>
            <SLink>Industries</SLink>
          </ADrop>
        </About>
        <Company>
          Company
          <CDrop>
            <SLink>Team</SLink>
            <SLink>Careers</SLink>
            <SLink>Contact</SLink>
          </CDrop>
        </Company>
        <Contact to={"/contact/"}>Contact</Contact>
      </Nav>
    </NavBar>
  </Wrapper>
);
