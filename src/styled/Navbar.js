import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
display:grid;
grid-template-columns: 1fr auto;
padding: 20px;
`
export const StyledNavBrand = styled.div`
font-size: 1.6rem;
text-align:left;
& > a{
  text-decoration: none;
} 
`
export const StyledNavItems = styled.ul`
list-style: none;
padding-left:0px;
display:grid;
grid-auto-flow: column;
grid-gap: 20px;
`
//passing a component as a parameter
export const StyledLink = styled(Link)`
text-decoration: none;
font-size:1.2rem;
transition: color 200ms;
&:hover{
color: var(--accent-color)
}
`