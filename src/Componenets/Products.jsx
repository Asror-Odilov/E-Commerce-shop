import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartState } from '../Context/Context';
import { producItemsList } from "../data";
import Product from "./Product";
import './components.css';
import ButtonAnim from '../Additions/ButtonAnim';
import Title from '../Additions/Title'
const Products = () => {

  const {state: {products}} = CartState()

  
  return (
    <div style={{margin: '-15rem 0 5rem 0'}}>
    <Title title='New Arrivals'/>
    <div className="products-container"> 
      {producItemsList.slice(8, 16).map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>

      <Link to = "./news" className='link'>    
        <div className="button" style={{ margin: 'auto',}}>
          <ButtonAnim value='View More' />
        </div>
      </Link>

    </div>
  );
};

export default Products;
  
  

