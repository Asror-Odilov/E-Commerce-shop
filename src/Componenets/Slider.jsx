import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowRightAlt} from '@material-ui/icons'
import styled from 'styled-components';
import {sliderItems} from '../data'
import './components.css';
import ButtonAnim from '../Additions/ButtonAnim';
import { motion } from "framer-motion"
import Cursor from '../Additions/Cursor';
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { Link } from 'react-router-dom';


const Slider = () => {
  // Function for slider animation
    const [wrapIndex, setWrapIndex] = useState(0);

    const hendleClick = index => {
        if(index === "left"){
            setWrapIndex(wrapIndex > 0 ? wrapIndex -1 : 2)
        }else{
            setWrapIndex(wrapIndex < 2 ? wrapIndex +1 : 0 )
        }
    }

    // Function for Framer motion animation
    const animation1 = {
      hidden: { opacity: 0, y: '3rem'},
      show: { opacity: 1, y: '1rem',
      transition: { delay: 1.3, duration: 1, }
      }
    }

    const animation2 = {
      hidden: { opacity: 0, y: '-3rem' },
      show: { opacity: 1, y: 0,
      transition: { delay: 1.5, duration: 1, }
      }
    }

    const animation3 = {
      hidden: { opacity: 0, y: '-5rem' },
      show: { opacity: 1, y: 0,
      transition: { delay: 1.8, duration: 1, }
      }
    }
    
    return (
        <div className='slider-con' style = {{background: "gray"}} >
            <Arrow position = "left" onClick={() => hendleClick("left")}>
                <ArrowLeft />
            </Arrow>
            <Wrapper wrapIndex={wrapIndex}>
                
                
                {sliderItems.map((item) => (
                <Slide bg = {item.bg} key={item.id}>
                <div className='slider-img-con'>
                <div className='slider-circle' />
                <img className='slider-img' src={item.img} />
                </div>
                <div className='slider-info-con'>
                    <motion.h1 className='slider-title'
                       variants={animation1}
                       initial="hidden"
                       animate="show"
                    >{item.title}</motion.h1>
                    <motion.p className='slider-desc'
                       variants={animation2}
                       initial="hidden"
                       animate="show"
                    >{item.desc}</motion.p>
                    <motion.div className="slider-btn"
                        variants={animation3}
                        initial="hidden"
                        animate="show"
                    >
                      <Link to='/productlist' className='link' >
                      <ButtonAnim value='Shop Now' />
                     </Link>
                    </motion.div>
                </div>
                </Slide>
                
                ))}
            </Wrapper>
            <Arrow position = "right" onClick={() => hendleClick("right")}>
                <ArrowRight />
            </Arrow>
            
        </div>
    )
}

export default Slider


const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #aaa7a7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.position === 'left' && "10px"};
    right: ${props => props.position === 'right' && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: teal;
      color: white;
    }
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.wrapIndex * -100}vw);
  h1{
    ${tablet({ 
      fontSize: '2.2rem',
      marginTop: '-8rem'
  })}
  ${mobile({ 
      fontSize: '1.6rem',
      marginTop: '-10rem'
  })}
  }
  img{
    ${tablet({ 
    height: '70%'
  })}
  ${mobile({ 
    display: 'none'
  })}
  }
  p{
    ${tablet({ 
    fontSize: '0.8rem',
    width: '400px'
  })}
  ${mobile({ 
    fontSize: '0.8rem',
    width: '300px'
  })}
  }
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

  



