import React from 'react';
import { AiFillDelete  } from "@react-icons/all-files/ai/AiFillDelete";
import './Cart.css';

// sidebar cart component 
const Cart = ({ cart, removeItem }) => {
    const {img, name} = cart

    return (
        <>
        <div className='d-flex flex-column flex-lg-row cart justify-content-around align-items-center my-3 single-item'>
            <img src={img} alt="" />
            <h3>{name} </h3>
            <div>{{name} && <AiFillDelete onClick={() =>removeItem(cart.id)} className='delete-icon' />}</div>
        </div>
        </>
    );
};

export default Cart;