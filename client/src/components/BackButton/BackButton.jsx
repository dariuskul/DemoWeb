import { Children } from 'react';
import {useHistory } from 'react-router-dom'
import './style.scss'
const BackButton = () => {
    const history = useHistory()
    return(
        <button className="back__button" onClick={() => history.goBack()}>
            <div className="button__typography">
            &larr; Back
            </div>
        </button>
    )
}

export default BackButton;