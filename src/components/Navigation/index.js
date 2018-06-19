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
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 0 20px;
  transition: all 0.2s ease;
  &:hover {
    -ms-transform: translate(0px, -1px);
    -webkit-transform: translate(0px, -1px);
    transform: translate(0px, -1px);
    color: #FFFFFF;
  }
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
                <SLink to={"/services/"} style={{ marginLeft: 0 }}>Services</SLink>
                <SLink to={"/about/"}>About</SLink>
                <SLink to={"/contact/"}>Contact</SLink>
            </Nav>
        </NavBar>
    </Wrapper>
);
