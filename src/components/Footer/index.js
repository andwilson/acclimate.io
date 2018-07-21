import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { lighten } from "polished";
import { colors } from "../../styles/theme";

import SectionWrapper from "../SectionWrapper";

import LogoSVG from "../../images/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    .cls-1 {
      fill: ${lighten(0.2, colors.black)};
    }
    #a2 {
      fill: ${colors.secondary};
    }
    #a3 {
      fill: ${colors.primary};
    }
    transition: all 0.4s ease;
    &:hover {
      transform: rotate(72deg);
    }
  }
  a {
    color: ${lighten(0.2, colors.black)};
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      color: ${lighten(0.3, colors.black)};
    }
  h2 {
    margin: 0;
  }
`;

const FooterContent = styled.div`
  margin-top: 20px;
  > a {
    color: ${lighten(0.2, colors.black)};
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      color: ${lighten(0.3, colors.black)};
    }
    display: block;
    margin-bottom: 10px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  > div {
    flex: 1 0 50%;
  }
`;

const Copyright = styled.div`
  color: ${lighten(0.2, colors.black)};
  font-size: 12px;
  a {
    color: ${lighten(0.2, colors.black)};
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      color: ${lighten(0.3, colors.black)};
    }
  }
`;

export default () => (
  <SectionWrapper
    backgroundColor={colors.black}
    fontColor={lighten(0.2, colors.black)}
  >
    <div>
      <LogoContainer>
        <Link to="/">
          <LogoSVG />
        </Link>
        <Link to="/">
          <h2>Acclimate</h2>
        </Link>
      </LogoContainer>
      <FooterContainer>
        <FooterContent>
          <Link to="/services">Services</Link>
          <Link to="/process">Process</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/team">Team</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </FooterContent>

        <FooterContent>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
        </FooterContent>
      </FooterContainer>
      <Copyright>
        <p>&copy; Acclimate {new Date().getFullYear()}</p>
        <p>
          Icons from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            flaticon.com
          </a>{" "}
          licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </p>
      </Copyright>
    </div>
  </SectionWrapper>
);
