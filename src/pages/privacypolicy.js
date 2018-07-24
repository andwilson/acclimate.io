import React from "react";
import Helmet from "react-helmet";
import SectionWrapper from "../components/SectionWrapper";

const PrivacyPolicySection = SectionWrapper.extend`
    
`;

export default () => (
  <div>
    <Helmet>
      <title>Acclimate | Privacy Policy</title>
    </Helmet>
    <PrivacyPolicySection>
      <div>
        <h1>Privacy Policy</h1>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or use acclimate.io services
        (the “Site”).
        <h3>Personal Information We Collect</h3>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.” We collect Device Information using
        the following technologies:
        <ul>
          <li>
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit{" "}
            <a
              href="http://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              allaboutcookies.org
            </a>.
          </li>
          <li>
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </li>
        </ul>
        Additionally when you make a purchase or attempt to make a purchase, or
        engage our services through the Site or via email or phone, we collect
        certain information from you, including your name, billing address,
        shipping address, payment information (including credit card numbers or
        online payment ID’s), email address, and phone number. We refer to this
        information as “Order Information.” When we talk about “Personal
        Information” in this Privacy Policy, we are talking both about Device
        Information and Order Information.
        <h3>How Do We Use Your Personal Information?</h3>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to: Communicate with you; Screen our orders for potential risk or fraud;
        and When in line with the preferences you have shared with us, provide
        you with information or advertising relating to our products or
        services. We use the Device Information that we collect to help us
        screen for potential risk and fraud (in particular, your IP address),
        and more generally to improve and optimize our Site (for example, by
        generating analytics about how our customers browse and interact with
        the Site, and to assess the success of our marketing and advertising
        campaigns).
        <h3>Sharing Your Personal Information</h3>
        We may share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, may use
        Google Analytics to help us understand how our customers use the
        Site--you can read more about how Google uses your Personal Information{" "}
        <a
          href="https://www.google.com/intl/en/policies/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>. You can also opt-out of Google Analytics{" "}
        <a href="https://tools.google.com/dlpage/gaoptout">here</a>. Finally, we
        may also share your Personal Information to comply with applicable laws
        and regulations, to respond to a subpoena, search warrant or other
        lawful request for information we receive, or to otherwise protect our
        rights.
        <h3>Behavioural Advertising</h3>
        As described above, we use your Personal Information to provide you with
        targeted advertisements or marketing communications we believe may be of
        interest to you. For more information about how targeted advertising
        works, you can visit the Network Advertising Initiative’s (“NAI”)
        educational page{" "}
        <a
          href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>. You can opt out of targeted advertising by:
        <ul>
          <li>
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/settings/ads/anonymous"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
          </li>
          <li>
            <a
              href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bing
            </a>
          </li>
        </ul>
        Additionally, you can opt out of some of these services by visiting the
        Digital Advertising Alliance’s opt-out portal at:
        http://optout.aboutads.info/.
        <h3>Do Not Track</h3>
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
        <h3>Your Rights</h3>
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
        <h3>Data Retention</h3>
        If you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
        <h3>Changes</h3>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
        <h3>Contact Us</h3>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by email at
        support@acclimate.io
      </div>
    </PrivacyPolicySection>
  </div>
);
