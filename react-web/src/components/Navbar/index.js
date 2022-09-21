import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
  Navbarcontainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink

}
   from './NavbarElements'
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <Navbarcontainer>
            <NavLogo to="home"> 
                Quipu
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">
                        About
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">
                        Discover                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Services">
                        Services
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="singup">
                        Sing Up
                    </NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/singin"> Sing in</NavBtnLink>
            </NavBtn>
        </Navbarcontainer>
      </Nav>

    </>
  )
}

export default Navbar