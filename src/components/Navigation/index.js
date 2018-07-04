import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  width: 100vw;
  z-index: 2;
  background-color: ${colors.dark};
`;

const Nav = styled.nav`
  display: flex;
  max-width: 960px;
  margin: auto;
  height: 65px;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: ${colors.light};
  font-size: 20px;
  transition: all 0.2s ease;
  &:hover {
    color: white;
  }
`;

const Right = styled.div`
  display: flex;
`;

const Logo = styled(Img)`
  margin-right: 10px;
  width: 40px;
  transition: all 0.4s ease;
  &:hover {
    transform: rotate(72deg);
  }
`;

const Item = styled.div` 
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  > a {
    text-decoration: none;
    color: ${colors.light};
    font-size: 14px;
    font-weight: 300;
  }
  &:after {
    content: "\u003e";
    color: ${colors.light};
    font-size: 14px;
    font-weight: 300;
    display: inline-block;
    margin-left: 5px;
    transition: all 0.1s ease;
  }
  transition: all 0.1s ease;
  &:hover {
    background: ${colors.medium};
  }
  &:hover:after {
    transform: rotate(90deg);
  }
`;

const Drop = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 65px;
  width: 100%;
  background: ${colors.dark};
  display: none;
  visibility: hidden;
  opacity: 0;
  span {
  }
  ${Item}:hover & {
    display: flex;
    flex-direction: column;
    visibility: visible;
    opacity: 1;
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 35px;
  padding-left: 10px;
  border-top: 1px solid ${colors.medium};
  text-decoration: none;
  color: ${colors.light};
  font-size: 12px;
  font-weight: 300;
  &:hover {
    background: ${colors.medium};
  }
`;

export default ({ data }) => (
  <Wrapper>
    <Nav>
      <Left>
          <Link to="/">
            <Logo sizes={data.logo.sizes} />
          </Link>
          <Title to="/">{data.site.siteMetadata.shortName}</Title>
      </Left>
      <Right>
        <Item>
          <a href="#">About</a>
          <Drop>
            <SLink>Services</SLink>
            <SLink>Process</SLink>
            <SLink>Industries</SLink>
          </Drop>
        </Item>
        <Item>
          <a href="#">Company</a>
          <Drop>
            <SLink>Team</SLink>
            <SLink>Careers</SLink>
            <SLink to="/contact">Contact</SLink>
          </Drop>
        </Item>
      </Right>
    </Nav>
  </Wrapper>
);