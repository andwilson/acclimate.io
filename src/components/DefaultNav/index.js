import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #28aa55;
  margin-bottom: 18px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(189, 189, 189, 1);
  box-shadow: 0px 1px 2px 0px rgba(189, 189, 189, 1);
`;

const NavBar = styled.div`
  max-width: 960px;
  flex-wrap: wrap;
  margin: auto;
  padding: 0px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = styled.div`
  display: flex;
  > h1 {
    margin: 0;
    line-height: 100%;
  }
`;

const Nav = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;

const SLink = styled(Link)`
  font-family: open sans;
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin: 0 0 0 20px;
  transition: all 0.2s ease;
  &:hover {
    color: #e4e4e4;
  }
`;

const TLink = styled(Link)`
  font-family: roboto;
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 0;
  margin: 0;
  transition: all 0.2s ease;
  &:hover {
    color: #e4e4e4;
  }
`;

export default ({ data }) => (
  <Wrapper>
    <NavBar>
      <Home>
        <TLink to="/about">
          <span>&</span>
          <span>Wilson</span>
        </TLink>
      </Home>
      <Nav>
      </Nav>
    </NavBar>
  </Wrapper>
);
