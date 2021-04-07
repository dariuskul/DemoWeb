import React from 'react'
import './contact.scss'
const Contact = () =>{
    return(
        <div className="contact__wrapper">
            <section>
                <h1>Contact</h1>
                <div className="section__rectangle"></div>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat</p>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat</p>
            </section>
            <div className="form__wrapper">
            <form >
                <label htmlFor="fname">Name</label>
                <input type="text" name="name" id="fname"/>
                <label htmlFor="fname">Email</label>
                <input type="text" name="name" id="fname"/>
                <label htmlFor="fname">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="button__area">
                <button type="submit">Learn more</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact;