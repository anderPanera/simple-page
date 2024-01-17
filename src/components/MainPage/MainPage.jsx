
import { useRef, useState } from "react"
import { useEffect } from "react"
import MainPageSelector from "./components/MainPageSelector/MainPageSelector"
import MainPageContent from "./components/MainPageContent/MainPageContent"

export default function MainPage() {

    const divRef = useRef()

    const [currentY, setCurrentY] = useState(0)
    const [direction, setDirection] = useState(0)
    const [anim, setAnim] = useState(false)

    const [items, setItems] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])


    useEffect(() => {
        divRef.current.addEventListener('wheel', handleWheel)
        return () => {
            divRef.current.removeEventListener('wheel', handleWheel)
        }
    }, [anim])

    const handleWheel = (e) => {
        e.preventDefault()
        if (currentY == 0 && e.deltaY == -100) return
        if (currentY == 7 && e.deltaY == 100) return
        if (!anim) {
            setDirection(e.deltaY)
            setAnim(_ => true)
            setTimeout(() => {
                setAnim(_ => false)
            }, 1000);
            setCurrentY(prev => Math.min(Math.max(prev + e.deltaY / 100, 0), 7))
        }
    }

    const handleClick = (e, id) => {
        e.preventDefault()
        if (currentY == id) return
        if (currentY < id) setDirection(100)
        else setDirection(-100)
        setAnim(_ => true)
        setTimeout(() => {
            setAnim(_ => false)
        }, 600);
        setCurrentY(id)
    }

    

    return (
        <div className="h-full w-full flex bg-black" ref={divRef}>
            <MainPageSelector items={items} handleClick={handleClick} />
            <MainPageContent items={items}  currentY={currentY} anim={anim} direction={direction}/>
            <span className="absolute bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8"></span>
        </div>
    )
}