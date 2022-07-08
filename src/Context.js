import React, {useState , useEffect} from "react"
const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    },[])

    function toggleFavorite(id){
        const updatedPhotos = allPhotos.map(data => {
            if (data.id === id) {
                return {
                    ...data,
                    isFavorite: !data.isFavorite
                }
            } 
            return data
        })
        setAllPhotos(updatedPhotos)
    }

    function addItemToCart(img) {
        setCartItems(prev => [...prev,img])
    }

    function checkItemInCart(id) {
        const currectCart = cartItems
        const isInCart = currectCart.some(item => {
            return item.id === id
        })
        return isInCart
    }

    function removeFromCart(id) {
        const newArr = cartItems.filter(item => {
            return item.id !== id
        })
        setCartItems(newArr)
    }

    function clearCart() {
        setCartItems([])
    }
    useEffect(() => {
        console.log(cartItems)
    },[cartItems])
    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addItemToCart,checkItemInCart,removeFromCart,cartItems,clearCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}