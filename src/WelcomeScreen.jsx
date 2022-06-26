import React from 'react';
import './WelcomeScreen.css';
import logo_meet_Auth from './images/logo_meet_Auth.png';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen-content">
        <img src={logo_meet_Auth} alt="logo" />
        <h1>Meet App</h1>
        <h4>
          The Meet App is a simple app that allows you to find coding events in
          major cities around the world. It allows your to search by city and
          select number of events you would like to see. It also includes charts
          to provide you with visual data on the app.
          <br></br>
          <br></br>
          No personal data is collected or saved at any stage and the calendar
          accessed is not a personal calendar, but one created specifically for
          the project.
          <br></br>
          <br></br>
          The Meet App uses sensitive scopes from Google Calendar API to allow
          access to a calendar specifically for the project. This app adheres to
          the Google API Services User Data Policy, including the Limited Use
          requirements.
        </h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              class="btn-text"
            >
              Sign in with google
            </button>
          </div>
        </div>
        <a
          href="https://ryanviers.github.io/meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}
export default WelcomeScreen;
