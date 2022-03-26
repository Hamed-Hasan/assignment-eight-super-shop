import React from 'react';
import { AiFillDelete  } from "@react-icons/all-files/ai/AiFillDelete";
import './Cart.css';

const Cart = ({ cart }) => {
    const {img, name} = cart

    return (
        <>
        <div className='d-flex flex-column flex-lg-row cart justify-content-around align-items-center my-3 single-item'>
            <img src={img} alt="" />
            <h3>{name} </h3>
            <div>{{name} && <AiFillDelete className='delete-icon' />}</div>
        </div>
        {/* <div>
        <button onClick={()=>selectItem(cart)} className='select-btn'>Select Items</button>
        </div> */}
        </>
    );
};

export default Cart;