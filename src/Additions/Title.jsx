import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'




const Title = ({title}) => {

  
// Framer MOtion Animation 

const { ref, inView } = useInView();
const animation= useAnimation()
const animation1 = useAnimation();
const animation2 = useAnimation();


useEffect(() => {

      if(inView) {
          animation.start({ 
              y: '-2rem',
              initial:{ y: '30rem' },
              transition:{ duration: 2, delay: 0.2, type: 'spring', stiffness: 50 }
           })
          }else if(!inView) {
              animation.start({ y: '2rem', })
          }

          if(inView) {
            animation1.start({ 
                y: '-2rem',
                initial:{ y: '30rem' },
                transition:{ duration: 2, delay: 0.4, type: 'spring', stiffness: 50 }
             })
            }else if(!inView) {
                animation1.start({ y: '2rem', })
            }

            if(inView) {
              animation2.start({ 
                  y: '-2rem',
                  initial:{ y: '30rem' },
                  transition:{ duration: 2, delay: 0.6, type: 'spring', stiffness: 50 }
               })
              }else if(!inView) {
                  animation2.start({ y: '2rem', })
              }
  
}, [inView])


  return (
    <div ref={ref} className="categ-title" style={{marginTop: '3rem'}}>
        <motion.p
           animate={animation}
        >{title}</motion.p> 
      <p className = "line">
        <motion.hr style={{color: "teal", height: "5px", backgroundColor: "teal"}} 
          animate={animation1}
        />
      </p>  
      <motion.p className='categ-text'
          animate={animation2}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit</motion.p>
    </div>
  )
}

export default Title