import React from 'react';
import {useState, useEffect} from 'react';
import { AiOutlineAppstoreAdd  } from "@react-icons/all-files/ai/AiOutlineAppstoreAdd";
// import { IoBagRemoveOutline  } from "@react-icons/all-files/io";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [carts, setCart] = useState([])
    // const [singleItem, setSingleItem] = useState(0)
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

const handleAddToCart = (item) => {
if(carts.length <= 3){
    const newCart = [...carts, item]
    setCart(newCart)
}else{
    console.log('try agian later')
}

const addBtn = document.getElementsByClassName('select-btn')[0];
const addBtn2 = document.getElementsByClassName('select-btn')[1];
addBtn.style.display = 'block'
addBtn2.style.display = 'block'
}

const selectItem = (e) => {
    const len = carts.length;
    const randomId = (Math.floor(Math.random() * len))
    const luckyNumber = carts[randomId];
    setCart([luckyNumber])
    // console.log(luckyNumber)
}

const clearData = () => {
    setCart([])
}





    return (
        <div>
            <h1 className='store-heading my-5 py-4'>My Super Shop</h1>
            <div className='container-fluid'>
            <div className="row">
            <div className="col-9">
            <div className="row g-5">
        {
        products.map(Pd => <Product key={Pd.id} product={Pd} 
            handleAddToCart={handleAddToCart}
        />)
        }
            </div>
            </div>
            <div className="col-3">
             <div className="cart-items">
             <h1 className='pb-3'>Selected Items</h1>
            {
                carts.map(cart => <Cart cart={cart} key={cart.id} />)
            }
            <div className='d-flex flex-column'>
            <button onClick={() =>selectItem()} className='select-btn mb-4'>Select Items <AiOutlineAppstoreAdd/></button>
            <button onClick={clearData} className='select-btn'>Chose Again </button>
            </div>
             </div>
            </div>

            </div>
            </div>

        </div>
    );
};

export default Shop;