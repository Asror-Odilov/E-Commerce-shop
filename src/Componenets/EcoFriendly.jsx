import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const EcoFriendly = () => {

    const { ref, inView } = useInView();
    const animation1 = useAnimation()
    const animation2 = useAnimation()

    useEffect(() => {

        // First text animation
        if(inView) {
            animation1.start({ 
                x: '0',
                initial:{ x: '-80vw' },
                transition:{ duration: 3, type: 'spring' }
             })
            }else if(!inView) {
                animation1.start({ x: '80vw' })
            }

            // Secont text animation
            if(inView) {
                animation2.start({ 
                    x: '0',
                    initial:{ x: '80vw' },
                    transition:{ duration: 3, type: 'spring' }
                 })
                }else if(!inView) {
                    animation2.start({ x: '-80vw' })
                }
    }, [inView])
    
  return (
    <div style={{height: '100vh'}} ref={ref}>
        <div className="eco-text">
            <motion.p className="p1" 
                animate={animation1}
            >
                We Provide Eco-Friendly Brands
            </motion.p>


            <motion.p className="p2"
                animate={animation2}
            >
                A Completely Ethical Wardrobe
             </motion.p>
        </div>
    </div>
  )
}

export default EcoFriendly