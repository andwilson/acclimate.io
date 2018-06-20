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
  justify-content: space-between;
`;

const Nav = styled.nav`
  position: relative;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
  padding: 10px;
`;



nav ul {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  list-style: none;
}
ul.drop-menu li {
  display: none;
  list-style: none;
}
li: hover > ul.drop-menu li {
  display: flex;
  flex: 1;
}
li > ul.drop-menu {
  position: absolute;
  display: flex;
  left: 0;
  top: 100 %;
  width: 100 %;
}

export default ({ data }) => (
  <nav>
    <Left>
      <li class="logo"><a href="#">SoulOTrip</a></li>
      <li >
        <a href="#">Adventure Trips</a>
        <ul class="drop-menu">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </li>
      <li><a href="#">Top Destinations</a></li>
      <li><a href="#">Explore</a></li>
    </Left>
    <Right>
      <li><a href="#">Username</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
    </Right>
  </nav>
);