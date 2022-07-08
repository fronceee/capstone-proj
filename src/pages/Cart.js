import React , {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const cartItems = useContext(Context).cartItems
    const clearCart = useContext(Context).clearCart
    const [isPlaceorder, setIsPlaceorder] = React.useState(false)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalPrice = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPrice}</p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={() => {
                    setIsPlaceorder(true)
                    setTimeout(() => {
                        console.log("Order Placed!")
                        clearCart()
                        setIsPlaceorder(false)
                    }, 3000)
                }}>{isPlaceorder ? "Ordering...": "Place Order"}</button>}
            </div>
        </main>
    )
}

export default Cart