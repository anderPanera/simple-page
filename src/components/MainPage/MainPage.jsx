import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { useEffect } from "react"

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

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="h-screen w-screen flex bg-bg p-5" ref={divRef}>
            <div className="h-full w-36 shrink-0 flex flex-col ">
                {items.map((val, i) => (
                    <div
                        key={i}
                        className={classNames('flex-1 w-full cursor-pointer', 'bg-' + (i + 1))}
                        onClick={(e) => handleClick(e, i)}
                    >

                    </div>
                ))}
            </div>
            <div className={classNames('w-full h-full ease-in-out duration-[2000ms]', 'bg-' + (currentY + 1))}>
                <AnimatePresence>
                    {items.map((val, i) => i == currentY && !anim &&
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="h-full text-white absolute font-akira p-10 text-8xl flex flex-col justify-evenly"
                        >
                            {!anim && <motion.span className="h-full"
                                initial={{ opacity: 0, y: direction }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -direction }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.1
                                }}
                            >
                                {val}.
                            </motion.span>}


                            <motion.div className="h-1/2"
                                initial={{ opacity: 0, y: direction }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -direction }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.2
                                }}
                            >
                                <img className="h-full" src="https://www.onlygfx.com/wp-content/uploads/2022/04/angry-eye-tribal-tattoo-1325.svg"></img>
                            </motion.div>
                            {!anim && <motion.span className="h-full"
                                initial={{ opacity: 0, y: direction }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -direction }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.3
                                }}
                            >
                                TATTOO.
                            </motion.span>}


                            {!anim && <motion.span className="h-full"
                                initial={{ opacity: 0, y: direction }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -direction }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4
                                }}
                            >
                                TATTOOTATTOO.
                            </motion.span>}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <span className="bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8"></span>
        </div>
    )
}