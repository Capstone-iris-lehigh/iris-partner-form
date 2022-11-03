import "./homePage.css";
import irisgo from "../../asset/irisgo.svg";
import FormRoute from "./components/FormRoute";
import React from "react";

function HomePage() {
  return (
    <div className="home">
      <nav className="home-nav">
        <div className="home-nav__header">
          <a href="https://www.irisradgroup.com/">Main Site</a>
          <img src={irisgo} />
          <span className="form-svg">Form</span>
        </div>

        <div className="home-nav__description">
          <h5>New Channel Partner Engagement Profile</h5>
          <p>
            IRIS R&D Group Inc. would like to take the necessary steps in
            onboarding your organization as a valued added channel partner.
            Please provide your corporate profile for IRIS to better understand
            your organization and specific offerings.
          </p>
        </div>
      </nav>

      <FormRoute />
    </div>
  );
}

export default HomePage;
