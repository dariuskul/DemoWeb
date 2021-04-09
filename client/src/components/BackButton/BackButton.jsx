import { Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom'
import { removeUrl } from '../../redux/actions';
import './style.scss'
const BackButton = (props) => {
    const history = useHistory();
    const urlArray = useSelector((state)=> state.url)
    console.log(urlArray)
    const dispatch = useDispatch();
    const urlToGoBack = (urlArray.length > 1 ? urlArray[urlArray.length-2] : '/');

    const functions = () =>{
        dispatch(removeUrl())
        history.push(urlToGoBack)
    }

    console.log(urlToGoBack)
    return(
        <button className="back__button" onClick={functions}>
            <div className="button__typography">
            &larr; Back
            </div>
        </button>
    )
    }


export default BackButton;