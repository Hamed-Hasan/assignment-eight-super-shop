import React from 'react';
import {useState, useEffect} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

const handleAddToCart = (item) => {
const newCart = [...carts, item]
setCart(newCart)
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
                <h1 className='pb-3'>Selected Items</h1>
            {
                carts.map(cart => <Cart cart={cart} key={cart.id}/>)
            }
            </div>

            </div>
            </div>

        </div>
    );
};

export default Shop;