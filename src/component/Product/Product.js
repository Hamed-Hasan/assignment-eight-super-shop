import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
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
            <div className="add-to-cart">
            <button>Add To Cart <FontAwesomeIcon className='icon' icon={faCartPlus}/></button>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default Product;