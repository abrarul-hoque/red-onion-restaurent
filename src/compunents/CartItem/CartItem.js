import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="row cart-item">
            <div className="col-3">
                <img className="w-100" src={props.item.image} alt="" />
            </div>
            <div className="col-5">
                <div className="cart-item-title">{props.item.title}</div>
                <div>${(props.item.price * props.item.quantity).toFixed(2)}</div>
            </div>
            <div className="col-3">
                <input className="cart-item-quantity" type="text" value={props.item.quantity} disabled/>
                <button className="cart-close-btn" onClick={()=> props.handleCart(props.item)}>X</button>
            </div>

        </div>
    );
};

export default CartItem;