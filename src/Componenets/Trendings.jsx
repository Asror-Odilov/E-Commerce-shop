import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Title from '../Additions/Title';
import { Link } from 'react-router-dom';

const Trendings = () => {

    const { ref, inView } = useInView();
    const animation= useAnimation()
    const animation1 = useAnimation();

    const animation2 = {
        initial: {y: '3rem'},
        whileInView: {y: 0,
        transition: {duration: 0.8}
      }}



    // Framer MOtion Animation 
    useEffect(() => {

        // Animation for Image 1
            if(inView) {
                animation.start({ 
                    y: '-9rem',
                    initial:{ y: '30rem' },
                    transition:{ duration: 2, delay: 0.2, type: 'spring', stiffness: 50 }
                 })
                }else if(!inView) {
                    animation.start({ y: '2rem', })
                }

        // Animation for Image 2 
            if(inView) {
                animation1.start({
                    y: '-9rem',
                    initial:{ y: '30rem' },
                    transition:{ duration: 2, type: 'spring', stiffness: 50 }
                 })
                }else if(!inView) {
                    animation1.start({ y: '2rem', })
                }


    }, [inView])


  return (
    <div className='trend-container'>
       <Title title='Trending Products'/>

        <div ref={ref} className='trend-wrapper'>
            
            {/* Image Container 1 */}
            <motion.div className="trend-img-con-1"
                animate={animation}
            >
                <Link to='/trendings'>
                <img src="./img/trend_img_3.jpg" />
                </Link>
                <motion.div className="trend-desc"
                     variants={animation2}
                     initial="initial"
                     whileInView="whileInView"
                >
                    <h2 >
                        Yout outdoor trends
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip 
                        ipsum dolor sit amet, consectetur adip 
                        dolor sit amet ipsum dolor sit amet.
                    </p>
                </motion.div>
            </motion.div>
            
            {/* Image Container 2 */}
            <motion.div className="trend-img-con-2"
                animate={animation1}
            >
                <Link to='/trendings'>
                  <img src="./img/trend_img_5.jpg" />
                </Link>
                <motion.div className="trend-desc"
                     variants={animation2}
                     initial="initial"
                     whileInView="whileInView"
                >
                    <h2 >
                        New party trends
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip 
                        ipsum dolor sit amet, consectetur adip 
                        dolor sit amet ipsum dolor sit amet.
                    </p>
                </motion.div>
            </motion.div>

        </div>
    </div>
  )
}

export default Trendings