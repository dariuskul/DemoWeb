import React from 'react'
import './content.scss'
import coffe from '../../../images/coffe2.jpg'
const Content = () => {
    return(
        <div className="content__container">
            <div className="content__grid">
                <div className="grid__item">
                    <div className="welcome">
                        <div  className="card__header">
                            WELCOME
                        </div>
                        <div className="card__rectangle"></div>
                        <div className="card__content">
                        <p>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed 
do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis 
nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea 
commodo consequat.</p>
                       
                        </div>
                        <div className="card_button_wrapper">
                        <button className="card__button">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="grid__item1">
                <div className="ui__ux">
                    <div className="ux__img">
                    <img src={coffe} alt="Coffe img"/>
                    </div>
                    <div className="ui__header">ui/ux design</div>
                    <div className="ui__content">
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor ultrices, gravida turpis id, interdum elit. Nullam vitae magna interdum lorem volutpat maximus ac ut nunc. Integer molestie sollicitudin maximus. Proin sollicitudin placerat nisl et semper</p>
                    <p>Curabitur tincidunt urna et tellus luctus tristique. Nunc malesuada imperdiet leo. Curabitur molestie ante congue feugiat mollis. Nunc feugiat rutrum turpis quis ullamcorper. Nunc auctor velit id nunc pharetra. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;