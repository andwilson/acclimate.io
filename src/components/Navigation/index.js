import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { lighten } from "polished";
import { colors } from "../../styles/theme";

import LogoSVG from "../../images/logo.svg";

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
  border-bottom: 1px solid ${lighten(0.05, colors.dark)};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  transition: all 0.2s ease;
  &:hover {
    color: white;
  }
`;

const Right = styled.div`
  display: flex;
`;

const LogoLink = styled(Link)`
  svg {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    transition: all 0.4s ease;
    .cls-1 {
      fill: ${colors.light};
    }
    &:hover {
      transform: rotate(72deg);
    }
    #a2 {
      fill: ${colors.secondary};
    }
    #a3 {
      fill: ${colors.primary};
    }
  }
`;

const Insights = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  > a {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
  }
  transition: all 0.1s ease;
  &:hover {
    background: ${lighten(0.05, colors.dark)};
  }
`;

const DropItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  > a {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
  }
  &:after {
    content: "\u003e";
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    display: inline-block;
    margin-left: 5px;
    transition: all 0.1s ease;
  }
  transition: all 0.1s ease;
  @media (hover: none) {
    background: ${props =>
      props.toggle ? colors.dark : lighten(0.05, colors.dark)};
    &:after {
      transform: ${props => (props.toggle ? "rotate(0deg)" : "rotate(90deg)")};
    }
  }
  @media (hover: hover) {
    &:hover {
      background: ${lighten(0.05, colors.dark)};
    }
    &:hover:after {
      transform: rotate(90deg);
    }
  }
`;

const Drop = styled.div`
  position: absolute;
  flex-direction: column;
  z-index: -1;
  left: 0;
  top: 65px;
  width: 100%;
  background: ${colors.dark};
  border-radius: 0 0 5px 5px;
  @media (hover: none) {
    display: ${props => (props.toggle ? "none" : "flex")};
    visibility: ${props => (props.toggle ? "hidden" : "visible")};
    opacity: ${props => (props.toggle ? 0 : 1)};
  }
  @media (hover: hover) {
    display: none;
    visibility: hidden;
    opacity: 0;
    ${DropItem}:hover & {
      display: flex;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 35px;
  padding-left: 10px;
  border-top: 1px solid ${lighten(0.05, colors.dark)};
  text-decoration: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
  &:hover {
    background: ${lighten(0.05, colors.dark)};
  }
  &:last-of-type {
    border-radius: 0 0 5px 5px;
  }
`;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutToggle: true,
      companyToggle: true
    };
    this.aboutHandler = this.aboutHandler.bind(this);
    this.companyHandler = this.companyHandler.bind(this);
  }

  aboutHandler() {
    this.setState(prevState => ({
      aboutToggle: !prevState.aboutToggle,
      companyToggle: true
    }));
  }

  companyHandler() {
    this.setState(prevState => ({
      aboutToggle: true,
      companyToggle: !prevState.companyToggle
    }));
  }

  render() {
    return (
      <Wrapper>
        <Nav>
          <Left>
            <LogoLink to="/">
              <LogoSVG />
            </LogoLink>
            <Title to="/">Acclimate</Title>
          </Left>
          <Right>
            <DropItem
              onClick={this.aboutHandler}
              toggle={this.state.aboutToggle}
            >
              <a href="#">About</a>
              <Drop toggle={this.state.aboutToggle}>
                <SLink to="/services">Services</SLink>
                <SLink to="/process">Process</SLink>
                <SLink to="/industries">Industries</SLink>
              </Drop>
            </DropItem>
            <DropItem
              onClick={this.companyHandler}
              toggle={this.state.companyToggle}
            >
              <a href="#">Company</a>
              <Drop toggle={this.state.companyToggle}>
                <SLink to="/team">Team</SLink>
                <SLink to="/careers">Careers</SLink>
                <SLink to="/contact">Contact</SLink>
              </Drop>
            </DropItem>
            <Insights>
              <Link to="/insights">Insights</Link>
            </Insights>
          </Right>
        </Nav>
      </Wrapper>
    );
  }
}
