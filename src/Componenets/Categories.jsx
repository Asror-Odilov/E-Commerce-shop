import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import './components.css'
import Title from "../Additions/Title";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

const Categories = () => {

  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  // Framer MOtion Animation 

  const { ref, inView } = useInView();
    const animation= useAnimation()
    const animation1 = useAnimation();


    useEffect(() => {

          if(inView) {
              animation.start({ 
                  y: '-9rem',
                  initial:{ y: '30rem' },
                  transition:{ duration: 2, delay: 0.2, type: 'spring', stiffness: 50 }
               })
              }else if(!inView) {
                  animation.start({ y: '2rem', })
              }

  }, [inView])

  return (
    <div className="main-container">
    <Title title='Pick Your Best Style'/>
    <div className="categories-container">
      <span className="circle-1" />
      <span className="circle-2" />
    <Carousel {...settings}>
          <div className="categ-wrapper">
            <div className="categ-img-container">
          <img className="categ-img" src="./img/styles_man_4.png" />
            </div>
          <div className="categ-content" style={{backgroundColor: "#2166fb"}}>Men's Style</div>
          </div>
          <div className="categ-wrapper">
            <div className="categ-img-container">
          <img className="categ-img" src="./img/styles_3.png" />
            </div>
          <div className="categ-content" style={{backgroundColor: "#85ec24"}}>Girl's Fashion</div>
          </div>
          <div className="categ-wrapper">
            <div className="categ-img-container">
            <img className="categ-img" src="./img/img_2.png" />
            </div>
            <div className="categ-content" style={{backgroundColor: "#f5943a"}}>Street Wear</div>
          </div>
          <div className="categ-wrapper">
            <div className="categ-img-container">
          <img className="categ-img" src="./img/styles_man_1.png" />
            </div>
          <div className="categ-content" style={{backgroundColor: "#212c5c"}}>Men's Fashion</div>
          </div>
          <div className="categ-wrapper">
            <div className="categ-img-container">
            <img className="categ-img" src="./img/styles_2.png" />
            </div>
          <div className="categ-content" style={{backgroundColor: "#fd3e3e"}}>Women Gallery</div>
          </div>
        </Carousel>
    </div>
    </div>
  );
};

export default Categories;






const Carousel = styled(Slider)`
  display: flex;
  gap: 2rem;

  & > button {
    color: #f50606;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
`

  