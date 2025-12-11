import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background-color: #222;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #00aaff;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/players">Players</NavLink>
      <NavLink to="/teams">Teams</NavLink>
      <NavLink to="/matches">Matches</NavLink>
    </Nav>
  );
}