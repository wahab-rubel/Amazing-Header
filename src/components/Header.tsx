import 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';


function Header() {
  return (
    <MainHeader>
        <NavLink to="/">
                <img src="/public/logo.png" alt="logo" />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.2rem;
height: 5rem;
background-color: ${({ theme }) => theme.colors.header};
display: flex;
justify-content: space-between;
align-items: center;
background-color: #51e2f5;
font-size: 1.5rem;


.logo{
  height: 10px;
  max-width: 10%;
}

`;

export default Header;