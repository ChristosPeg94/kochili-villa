import { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine, RiFacebookCircleFill, RiInstagramFill, RiHome3Fill, RiBriefcase4Fill, RiContactsBookFill } from 'react-icons/ri';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
        <div className='navbar-links'>
            <div className= 'navbar-links_logo'>
                <a href='/'>
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className='navbar-links_container'>
                <a href='https://www.facebook.com/profile.php?id=100094392341996' target="_blank" rel="noreferrer"> 
                    <RiFacebookCircleFill className='navbar-links-facebook'/>                    
                </a>
                <a href='https://www.instagram.com/kochilivilla/' target="_blank" rel="noreferrer">
                    <RiInstagramFill className='navbar-links-instagram'/>
                </a>    
            </div>
            <div className='navbar-callUs'>
                <a href='tel:+306944681982'>
                    <button type='button'>Call Us</button>
                </a>
            </div>


            <div className='navbar-menu'>
                    <RiMenu3Line className='overlay-menu' onClick={() => setToggleMenu(true)}/>
                    
                    {toggleMenu &&(
                        <div className='navbar-menu_container flex__center slide-bottom'>
                            <RiCloseLine className='overlay__close' onClick={() => setToggleMenu(false)}/>
                                <ul className='navbar-menu_container-links'>
                                    <li><RiHome3Fill className='navbar-menu_icons' /><a href='/'>Home</a></li>
                                    <li><RiBriefcase4Fill className='navbar-menu_icons' /><a href='/services'>Services</a></li>
                                    <li><RiContactsBookFill className='navbar-menu_icons' /><a href='/contactUs'>Contact Us</a></li>
                                </ul>

                        </div>
                    )}
            </div>





        </div>
    </div>
  )
}

export default Navbar