import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const {price, name, img, category} = product

    return (
        <div className="col-12 col-xl-4">
            <div className='card'>
            <div className="image-container">
            <img src={img} alt="" />
            </div>
            <div className="product-info">
            <h3>Price: ${price}</h3>
            <h5>{name}</h5>
            <b>Category {category}</b>
            <div className="add-to-cart">
            <button onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon className='icon' icon={faCartPlus}/></button>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default Product;