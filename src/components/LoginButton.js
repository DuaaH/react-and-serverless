import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButtonLink } from "../styled/Buttons";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButtonLink onClick={() => loginWithRedirect()}>Log In</StyledButtonLink>;
};

export default LoginButton;