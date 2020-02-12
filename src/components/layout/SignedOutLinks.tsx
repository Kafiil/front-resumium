import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
