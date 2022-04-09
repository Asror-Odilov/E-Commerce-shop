import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

const OpenningLayer = () => {
    
    const anim = {
      exit: {opacity: 0},
    }
   
    const animation = {
      hidden: { y: 0},
      show: { y: '-100vh',
      transition: { duration: 1.5 }  
    }}

    const animation1 = {
      hidden: { y: '80vh'},
      show: { y: '-100vh',
      transition: { duration: 1.5 }  
    }}

    const animation2 = {
      hidden: { y: '120vh'},
      show: { y: '-100vh',
      transition: { duration: 1.5, delay: 0.2}  
    }}

   

  return (
      <div>
      <motion.div className='cover cover0' 
            variants={animation}
            initial="hidden"
            animate="show"
        />
        <motion.div className='cover cover1' 
            variants={animation1}
            initial="hidden"
            animate="show"
        />
          <motion.div className='cover cover2' 
            variants={animation2}
            initial="hidden"
            animate="show"
        />
       </div>

    

  )
}

export default OpenningLayer

