import React, {useContext, useState} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {

    const [hovered, ref] = useHover()
    const removeFromCart = useContext(Context).removeFromCart

    return (
        <div className="cart-item">
            <i 
            ref={ref}
            className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
                onClick={() => {removeFromCart(item.id)}}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem