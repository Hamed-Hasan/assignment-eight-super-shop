import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const {price, name, img, category} = product

    return (
        <div className="col-12 col-lg-4">
            <div className='card'>
            <div className="image-container">
            <img src={img} alt="" />
            </div>
            <div className="product-info">
            <h3>{price}</h3>
            <h4>{name}</h4>
            <h4>{category}</h4>
            <button>Add To Cart</button>
            </div>
            
        </div>
        </div>
    );
};

export default Product;