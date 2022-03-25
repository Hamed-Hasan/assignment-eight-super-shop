import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart }) => {
    const {img, name} = cart

    return (
        <div className='d-flex flex-column flex-lg-row cart justify-content-around align-items-center my-3'>
            <img src={img} alt="" />
            <h3 className='fs-2'>{name} </h3>
            <div>{{name} && <FontAwesomeIcon className='icon' icon={faCartPlus}/>}</div>
           
        </div>
    );
};

export default Cart;