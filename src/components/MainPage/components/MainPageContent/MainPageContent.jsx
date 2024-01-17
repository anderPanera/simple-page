import { motion, AnimatePresence } from "framer-motion";
import { classNames } from "../../../../lib/classNames";

export default function MainPageContent({ items, currentY, anim, direction}) {
    return (
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


                        <motion.div className="h-2/3"
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
    )
}