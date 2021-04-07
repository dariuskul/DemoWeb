import React from 'react'
import './products.scss'
import umbrella from '../../../images/umbrella.svg'
import coffe from '../../../images/coffe.jpg'
import books from '../../../images/vandan-patel-vfiuGpL9fiU-unsplash 1 1.jpg'
const Products = () => {
    return(
        <main>
            <h1 className="products__header">Products</h1>
            <h2 className="products__subheader">Offers today</h2>
            <div className="products">
                <div className="item item1">
                    <img className="apiImg" src={umbrella}alt="umbrella"/>
                </div>
                <div className="item item2">
                    <div className="test2">
                    <img src={coffe}alt="coffe"/>
                    <h1>THE BEST COFFE</h1>
                    </div>
                    
                </div>
                <div className="item item3">
                <div className="test2">
                    <img src={books}alt="coffe"/>
                    <h1>THE TOP 100 BOOKS</h1>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default Products;