import React from 'react'
import './footer.scss'

const Footer = () => {
    return(
    <footer>
        <div className="footer__block">
        <div className="footer__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat.
        </div>

        <div className="foooter__list">
        <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>WORKS</li>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
        </ul>
        </div>
        </div>

        <div className="company__info">
            <div>
            &copy; Demo<span>Site</span>
            </div>
            <div className="copyright">
            All rights reserved
            </div>
        </div>
    </footer>
    )

}

export default Footer;