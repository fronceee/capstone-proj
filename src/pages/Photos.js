import React, {useEffect, useState} from "react"
import {Context} from "../Context.js"

import Image from "../components/Image"
import {getClass} from "../utils"
import { useContext } from "react"


function Photos() {

    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements.length > 0 ? imageElements : <h1>Loading...</h1>}
        </main>
    )
}

export default Photos