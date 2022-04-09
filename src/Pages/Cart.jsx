import { Add, Announcement, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../Componenets/Announcements";
import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { CartState } from "../Context/Context"
import { Link } from "react-router-dom";
import './pages.css';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

 
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  

  return (
    <div>
      <Announcements />
      <Navbar />

      {/* Wrapper */}
      <div style={{
            padding: '20px',
            marginBottom: '5rem',
      }}>
        <h1 style={{fontWeight: 300, textAlign: 'center'}}>YOUR BAG</h1>
        
        {/* Top Line */}
        
        <div className="top">
          <Link to='/productlist'>
            <button className="btn-continue-shop">CONTINUE SHOPPING</button>
          </Link>
          <div>
            <p className="shopping-bag">Shopping Bag({cart.length})</p>
          </div>
          <button type="filled">CHECKOUT NOW</button>
        </div>

        
        {/* Bottom Part */}
        
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          
          {/* Info of a product added to cart */}
          <div style={{flex: 2.5}}>
              {cart.map((item) => (
            <Product key={item.id}>
              <ProductDetail>
                <Image src={item.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.id}
                  </ProductId>
                  <ProductColor color={item.color} />
                  <ProductSize>
                    <b>Size:</b> {item.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>$ {item.number} </ProductPrice>
                <button className="btn-delete"onClick = {() => {
            dispatch({type: 'REMOVE_FROM_CARD', payload: item})
          }}>Delete</button>
              </PriceDetail>
            </Product>
              ))}
            <Hr />
          </div>

          {/* Cart product summary */}
          
          <div className="summary">
            <h1 style={{fontWeight: 200}}>ORDER SUMMARY</h1>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>$ 120.99</span>
            </div>
            <div className="summary-item"> 
              <span>Shipping Cost</span>
              <span>$ 5.00</span>
            </div>
            <div className="summary-item">
              <span>Total</span>
              <span>$ 125.99</span>
            </div>
            <button className="btn-delete">Pay Now</button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
  
  
  const Product = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    margin-bottom: 2rem;
    border-radius: 10px;
    ${mobile({ flexDirection: "column" })}
    `;
  
  const ProductDetail = styled.div`
  flex: 2;
    display: flex;
    `;
  
  const Image = styled.img`
    width: 200px;
    height: 200px;
  `;
  
  const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  
  const ProductName = styled.span``;
  
  const ProductId = styled.span``;
  
  const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `;
  
  const ProductSize = styled.span``;
  
  const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  
  
  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
  `;
  
  const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
  `;
  



  

