import React,{useState,useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo,  MobileIcon,
        NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink,NavPages} from './NavBar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Button} from '../../globalStyles';
import logo from '../../images/logo.svg';

const NavBar = () => {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
      
    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
    return (
        <>
        <IconContext.Provider value={{color:'#3b3054'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="">
                        <img src={logo} alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                         {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavPages>
                            <NavItem>
                                <NavLinks to="/features">Features</NavLinks>                        
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/pricing">Pricing</NavLinks>                        
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/resources">Resources</NavLinks>                        
                            </NavItem>
                        </NavPages>
                        <NavItemBtn>
                        {button ? (<>
                        <NavBtnLink to='/sign-up'>
                            <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                        <NavBtnLink to='/log-in'>
                            <Button primary>LOG IN</Button>
                        </NavBtnLink>
                        </>
                        ) : (<>
                        <NavBtnLink to='/sign-up'>
                            <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                        </NavBtnLink>
                         <NavBtnLink to='/log-in'>
                        <Button onClick={closeMobileMenu} fontBig primary>LOG IN</Button>
                     </NavBtnLink>
                     </>
                        )}
                    </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar
