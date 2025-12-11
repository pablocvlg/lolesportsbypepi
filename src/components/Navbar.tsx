import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 2rem;
  background-color: #1a1a1aff;
  align-items: center;
  box-shadow: 0 2px 6px rgba(21, 83, 17, 0.75);
  gap: 3rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s ease;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  letter-spacing: 0.15em;
  font-size: 15px;
  
  &:hover {
    color: #c2890f !important;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/players">PLAYERS</NavLink>
      <NavLink to="/teams">TEAMS</NavLink>
      <NavLink to="/matches">MATCHES</NavLink>
    </Nav>
  );
}