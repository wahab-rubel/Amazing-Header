import 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
 
const Nav = styled.nav`
.navbar-list li { 
  display: flex;
  gap: 4.3rem;

  .navbar-link{
    text-decoration: none;
    &:hover,
    &:active {
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.10s linear;
        
    }
    &:hover,
    active{
      color: ${({ theme }) => theme.colors.helper};
    }
  }
  
}

`;
  return (
    <Nav>
        <div className="menuIcon">
                <ul className='navbar-list'>
                <li>
                <NavLink className="navbar-link" to="/">Home</NavLink>
                <li>
                <NavLink className="navbar-link" to="/About">About</NavLink>
                </li>
                <li>
                <NavLink className="navbar-link" to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink className="navbar-link" to="/Service">Service</NavLink>
                </li>
                <li>
                <NavLink className="navbar-link" to="/Login">Login</NavLink>
                </li>
                </li>
                </ul>
        </div>
    </Nav>
  )

}

export default Navbar;