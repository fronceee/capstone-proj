import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered,setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }


    useEffect(() => {
        const toListen = ref.current
        toListen.addEventListener("mouseenter", enter)
        toListen.addEventListener("mouseleave", leave)
        
        return () => {    
            toListen.removeEventListener("mouseenter", enter)
            toListen.removeEventListener("mouseleave", leave)
        }
    }, [])

    
    return [hovered, ref]
}

export default useHover