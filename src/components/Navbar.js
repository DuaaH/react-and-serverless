import React from 'react'
import { Link } from "react-router-dom";
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink } from '../styled/Navbar';
import { Accent } from '../styled/Random';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import useTheme from '../hooks/UseTheme'
import { StyledButton } from '../styled/Buttons';


export default function Navbar({ toggleTheme }) {
  const { isAuthenticated } = useAuth0()
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/highScores">High Scores</StyledLink></li>
        {!isAuthenticated && <li><LoginButton>login</LoginButton></li>}
        {isAuthenticated && <li><LogoutButton>logout</LogoutButton></li>}
        <StyledButton onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </StyledNavItems>
    </StyledNavbar>
  )
}
