// The component is about a single product info
import { Add, Remove } from "@material-ui/icons";
import { useEffect } from "react";
import styled from "styled-components";
import Announcements from "../Componenets/Announcements";
import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";
import Newsletter from "../Componenets/Newsletter";
import { CartState } from "../Context/Context";
import { mobile } from "../responsive";
import './pages.css';

const Product = () => {

  const {
    state: { product },
    dispatch,
  } = CartState();

  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <Announcements />

      {product.map((item) => (
      /* Main Container */
      <div className="product-wrapper">
        
        {/* Product Image Container */}
        <div style={{flex: 1}}>
          <img src={item.img} className="product-img" />
        </div>

        {/* Product Info Container */}
        <div className="product-info-con">
          <h1 className='product-title'>{item.title}</h1>
          <p className='product-desc'>{item.desc}</p>
          <span className='product-price'>$ {item.number}</span>
          <div className='product-filter'>
            <div style={{display: 'flex', alignItems: 'center',}}>
              <p className='product-filter-text'>Color: {item.color}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center',}}>
              <p className='product-filter-text'>Size</p>
              <select style={{marginLeft: '10px', padding: '5px'}}> 
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <div className='add-container'>
            <div className='ammount-container'>
              <Remove />
              <span className='amount'>1</span>
              <Add />
            </div>
            <button className='product-addcard-btn' onClick={() => {
              if(dispatch({type: 'ADD_TO_CARD', payload: item})){
                return alert('Item was added to card')
              }else {
                return null;
              }
            }}>ADD TO CART</button>
          </div>
        </div>
      </div>
        ))}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
 
 