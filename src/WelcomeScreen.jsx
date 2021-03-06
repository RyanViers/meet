import React from 'react';
import './WelcomeScreen.css';
import logo_meet_Auth from './images/logo_meet_Auth.png';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen-content">
        <img src={logo_meet_Auth} alt="logo" />
        <h1>Meet App</h1>
        <h4>Sign in with Google.</h4>
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
