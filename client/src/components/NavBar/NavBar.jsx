import React, { useEffect, useState } from 'react'
import './navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUrl } from '../../redux/actions';
const NavBar = () => {
    // This section is pretty bad in my opinion, but i did not have time to fix this.
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation()
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.url)
    useEffect(()=>{
        if(pathname!== state[state.length-1] && pathname!=='/'){
            dispatch(addUrl(pathname))
          }

    },[pathname,dispatch,state])
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
                            <li onMouseOver={()=> setOpen(!open)} onMouseOut={()=> setOpen(!open)}>
                                {/* Kaip supratau, tai dropdown listui nereikia, kad kažkur nueitų, tai palieku kaip yra. */}
                                <a href="/">Works</a>
                                <ul>
                                    <li>
                                    <a href="/">Service</a>
                                    </li>
                                    <li>
                                        <a href="/">Graphic</a>
                                    </li>
                                    <li>
                                        <a href="/">Design</a>
                                    </li>
                                    <li>
                                        <a href="/">Logo</a>
                                    </li>
                                    <li>
                                        <a href="/">Website</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <Link to='/about' style={{color: 'white', textDecoration: 'none'}}>About me</Link>

                            </li>
                            <li>
                            <Link to='/contact' style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Route path={``}>

                    </Route>
                </div>
        </nav>
    )
}

export default NavBar;