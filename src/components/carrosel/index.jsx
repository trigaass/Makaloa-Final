import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const images = [
    "/outros/PAV 1.png", 
    "/outros/PAV 2.png", 
    "/outros/PAV 3I.png", 
    "/outros/PAV 3S.png", 
    "/outros/PAV ROOFTOP.png", 
    "/outros/PAV TÉRREO.png"
  ];

export const Carrosel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <motion.div ref={carousel} className="carousel">
            <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {images.map(image => (
                    <motion.div className="item" key={image}>
                        <img src={image} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}