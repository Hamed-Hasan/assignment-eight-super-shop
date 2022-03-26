import React from 'react';
import {useState, useEffect} from 'react';
import { AiOutlineAppstoreAdd  } from "@react-icons/all-files/ai/AiOutlineAppstoreAdd";
import Modal from "react-modal";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FcCancel } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';

import './Shop.css';

Modal.setAppElement("#root");
// shop component 
const Shop = () => {
    const [products, setProduct] = useState([])
    const [carts, setCart] = useState([])
    const [modal, setModal] = useState(false);


    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          height: "250px",
          width: "400px",
          overflow: "auto",
          borderRadias:"50px",
        },
        
      };


      const toggleModal = () => {
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };
    

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
    // alert('')
    toggleModal()
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
    if(carts.length > 0){
        alert('You Have selected One Items')
    }
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


            <Modal  isOpen={modal} onRequestClose={closeModal} style={customStyles}>
      
          
          <GrClose className='modal-close-button' onClick={closeModal} />
       
        
          <div>
            
            <h1 className='display-6 fw-bold text-center mt-4'> You cannot select more than four </h1>
          </div>
        
          
      </Modal>


        </div>
    );
};

export default Shop;