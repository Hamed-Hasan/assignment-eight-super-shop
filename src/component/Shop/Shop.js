import React from 'react';
import {useState, useEffect} from 'react';
import { AiOutlineAppstoreAdd  } from "@react-icons/all-files/ai/AiOutlineAppstoreAdd";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

// shop component 
const Shop = () => {
    const [products, setProduct] = useState([])
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    // add to cart button handler
const handleAddToCart = (item) => {
    // handle add to cart first time added 
    if(carts.find(product => product.id === item.id)){
        return
}

if(carts.length <= 3){
    const newCart = [...carts, item]
    setCart(newCart)
}else{
    alert('You cannot select more than four')
}
// if(carts.find(product => product.id === item.id)){
//     alert('hi')
// }

const addBtn = document.getElementsByClassName('select-btn')[0];
const addBtn2 = document.getElementsByClassName('select-btn')[1];
addBtn.style.display = 'block'
addBtn2.style.display = 'block'
}

// random select item handler 
const selectItem = () => {
    const len = carts.length;
    const randomId = (Math.floor(Math.random() * len))
    const luckyNumber = carts[randomId];
    setCart([luckyNumber])
}

// choose again handler 
const clearData = () => {
    setCart([])
}

// single removeItem handler 
const removeItem = (id) => {
    const newList = carts.filter((item) => item.id !== id);
    setCart(newList)
}

    return (
        <div>
            <h1 className='store-heading my-5 py-4'>My Super Shop</h1>
            <div className='container-fluid'>
            <div className="row">
            <div className="col-9">
            <div className="row g-5">

                {/*------ all product items------  */}
        {
        products.map(Pd => <Product key={Pd.id} product={Pd} 
            handleAddToCart={handleAddToCart}
        />)
        }
            </div>
            </div>
            <div className="col-3">
             <div className="cart-items">
             <h1 className='pb-3'>Selected Items <b>{carts.length}</b></h1>

             {/*------- cart items ------ */}
            {
                carts.map(cart => <Cart removeItem={removeItem} cart={cart} key={cart.id} />)
            }
            <div className='d-flex flex-column'>
            <button onClick={() =>selectItem()} className='select-btn mb-4'>Select Items <AiOutlineAppstoreAdd/></button>
            <button onClick={clearData} className='select-btn'>Choose Again</button>
            </div>
             </div>
            </div>

            </div>
            </div>

        </div>
    );
};

export default Shop;