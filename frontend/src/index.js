import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import {GoogleOAuthProvider} from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId="684124019192-isivkpmc014vu2ane5pgd25u95hj73sq">
      <Router>
        <App />
      </Router>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
