import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButtonLink } from "../styled/Buttons";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButtonLink onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </StyledButtonLink>
  );
};

export default LogoutButton;