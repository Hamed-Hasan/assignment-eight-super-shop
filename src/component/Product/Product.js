import React from 'react';

import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const {price, name, img, category} = product

    return (
        <div className="col-12 col-xl-4">
            <div className='card'>
            <div className="image-container">
            <img src={img} alt="" />
            </div>
            <div className="pd-info">
            <h3>Price: ${price}</h3>
            <h5>{name}</h5>
            <b>Category {category}</b>
            <div className="add-to-cart">
            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default Product;