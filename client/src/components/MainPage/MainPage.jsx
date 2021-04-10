import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import Contact from './Contact/Contant'
import Content from './Content/Content'
import Products from './Products/Products'
import {fetchData}  from '../../redux/actions'

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchData('kaunas','long-term'))
    },[dispatch])
    return(
        <main>
        <Content/>
        <Products/>
        <Contact/>
        </main>
    )
}

export default MainPage;