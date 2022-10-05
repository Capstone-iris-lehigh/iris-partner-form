import "./asset/normalize.css";
import "./App.css";
import irisgo from "./asset/irisgo.svg";
import FormContent from "./component/FormContent";

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <div className="app-nav__header">
          <a>Home</a>
          <img src={irisgo} />
          <a className="form-svg">Form</a>
        </div>

        <div className="app-nav__description">
          <h5>New Channel Partner Engagement Profile</h5>
          <p>
            IRIS R&D Group Inc. would like to take the necessary steps in
            onboarding your organization as a valued added channel partner.
            Please provide your corporate profile for IRIS to better understand
            your organization and specific offerings.
          </p>
        </div>
      </nav>

      <FormContent />
    </div>
  );
}

export default App;
