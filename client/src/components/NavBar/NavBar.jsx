import React, { useState } from 'react'
import './navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return(
        <nav className="nav__wrapper">
                <div className="upper__nav">
                    <div className="upper__links">
                    <ul>
                         <li>Home</li>
                         <li>Service</li>
                         <li>Works</li>
                         <li >About me</li>
                         <li>Contact me</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom__nav">
                  <div className="bottom__item">
                    <Link to='/' className="logo">Demo<span>Site</span></Link>
                     <div className="burger__wrapper">
                        <MenuIcon style={{fontSize: '4em', color: 'white',strokeWidth: '15px'}}/>
                     </div>
                    </div>

                     <div className="bottom__links">
                        <ul>
                            <li>
                                <Link style={{color: 'white', textDecoration: 'none'}} to='/home'>Home</Link>
                            </li>
                            <li>
                            <Link style={{color: 'white', textDecoration: 'none'}} to='/service'>Service</Link>
                            </li>
                            <li>
                            <Link style={{color: 'white', textDecoration: 'none'}} to='/contact'>Contact</Link>
                            </li>
                            <li onMouseOver={()=> setOpen(!open)} onMouseOut={()=> setOpen(!open)}>
                                {/* Kaip supratau, tai dropdown listui nereikia, kad kažkur nueitų, tai palieku kaip yra. */}
                                <a>About me</a>
                                <ul>
                                    <li>
                                    <a>ALL</a>
                                    </li>
                                    <li>
                                        <a>Graphic</a>
                                    </li>
                                    <li>
                                        <a >Design</a>
                                    </li>
                                    <li>
                                        <a >Logo</a>
                                    </li>
                                    <li>
                                        <a >Website</a>
                                    </li>
                                </ul>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default NavBar;