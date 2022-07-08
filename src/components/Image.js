import React, {useState,useContext} from "react"
import {Context} from "../Context"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function Image({img, className}) {
    const [hovered, ref] = useHover()
    const toggleFavorite = useContext(Context).toggleFavorite
    const addItemToCart = useContext(Context).addItemToCart
    const checkItemInCart = useContext(Context).checkItemInCart
    const removeFromCart = useContext(Context).removeFromCart
    const cartStatusIcon = checkItemInCart(img.id) ? "ri-shopping-cart-fill cart"
                            : "ri-add-circle-line cart"

    return (
        <div 
            ref={ref}
            className={`${className} image-container`}>
            {hovered &&
                (<div>
                    <i className={`ri-heart-${img.isFavorite ? "fill": "line"} favorite`}
                        onClick={() => toggleFavorite(img.id)}></i>
                    <i className={cartStatusIcon}
                        onClick={() => {
                            if (checkItemInCart(img.id)) {
                                removeFromCart(img.id)
                            } else {
                                addItemToCart(img)
                            }
                        }
                         } ></i>
                </div>)}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
    className:PropTypes.string,
    img:PropTypes.shape(({
        id:PropTypes.string,
        url:PropTypes.string,
        isFavorite: PropTypes.bool
    }))
}

export default Image
