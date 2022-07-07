import React, {useEffect, useState} from "react"
import {Context} from "../Context.js"

import Image from "../components/Image"
import {getClass} from "../utils"
import { useContext } from "react"


function Photos() {

    const imgs = useContext(Context).allPhotos
    const [imgsComps, setImgsComps] = useState([])
    const [allImgs, setAllImgs] = useState(imgs)
    const [isImagesLoaded,setIsImagesLoaded] = useState(false)
    
    useEffect(() => {
        if (imgs.length > 0) {
            setAllImgs(imgs)
        }
    },[imgs])
    
    useEffect(() => {
        if (allImgs.length > 0) {
            const arr = allImgs.map(item => {
                return (
                    <Image key={item.id} img={item.url} className={getClass(item.id)}/>
                )
            })
            setImgsComps(arr)
            setIsImagesLoaded(true)
        }
    },[allImgs])
    

    return (
        <main className="photos">
            {isImagesLoaded ? imgsComps
                : <h1>Loading...</h1>}
        </main>
    )
}

export default Photos