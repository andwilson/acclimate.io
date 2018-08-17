import React from "react";
import { navigateTo } from "gatsby-link";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import CallToActionLink from "../components/CallToActionButton";

import ContactSVG from "../images/contact.svg";

const CallToActionButton = CallToActionLink.withComponent("button").extend`
  width: 200px;
  justify-self: end;
  margin: 0;
`;

const H1 = styled.h1`
  margin-top: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 1em;
  grid-template-columns: 1fr;
  margin: 20px 0;
  @media (min-width: 450px) {
    grid-template-columns: 25% 75%;
  }
  width: 100%;
  > label {
    font-style: italic;
    color: ${colors.light};
  }
  > input {
    border-radius: 5px;
    -webkit-box-shadow: inset 0px 1px 2px 0px rgba(189, 189, 189, 0.3);
    -moz-box-shadow: inset 0px 1px 2px 0px rgba(189, 189, 189, 0.3);
    box-shadow: inset 1px 1px 2px 0px rgba(189, 189, 189, 0.3);
    border: 1px solid rgba(189, 189, 189, 1);
    padding: 7px;
    color: ${colors.dark};
    background-color: ${colors.light};
    opacity: 0.85;
    :focus {
      outline: none;
      background-color: ${colors.white};
      opacity: 1;
    }
  }
  > textarea {
    height: 150px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0px 1px 2px 0px rgba(189, 189, 189, 0.3);
    -moz-box-shadow: inset 0px 1px 2px 0px rgba(189, 189, 189, 0.3);
    box-shadow: inset 1px 1px 2px 0px rgba(189, 189, 189, 0.3);
    border: 1px solid rgba(189, 189, 189, 1);
    padding: 7px;
    resize: none;
    color: ${colors.dark};
    background-color: ${colors.light};
    opacity: 0.85;
    :focus {
      outline: none;
      background-color: ${colors.white};
      opacity: 1;
    }
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo("/thanks"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <PageHeader>
          <ContactSVG />
          <div>
            <H1>
              Get in <span>contact</span> with us
            </H1>
            <h3>
              We'd love to hear from you! Reach out and we'll be in touch as
              soon as possible.
            </h3>
            <Form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <label hidden>Don’t fill this out: </label>
              <input hidden name="bot-field" onChange={this.handleChange} />
              <label>Your name:</label>
              <input type="text" name="name" onChange={this.handleChange} />
              <label>Your email:</label>
              <input type="email" name="email" onChange={this.handleChange} />
              <label>Message:</label>
              <textarea name="message" onChange={this.handleChange} />
              <div />
              <CallToActionButton type="submit">SEND</CallToActionButton>
            </Form>
          </div>
        </PageHeader>
      </div>
    );
  }
}
