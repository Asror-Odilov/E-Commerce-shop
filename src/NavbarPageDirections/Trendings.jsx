import React, { useEffect } from 'react'
import Announcements from '../Componenets/Announcements';
import Footer from '../Componenets/Footer';
import Navbar from '../Componenets/Navbar';
import Newsletter from '../Componenets/Newsletter';
import { KeyboardArrowDown } from '@material-ui/icons';
import Title from '../Additions/Title';
import ButtonAnim from '../Additions/ButtonAnim';
import ProductItems from '../Pages/ProductItems';
import '../Pages/pages.css';
import { producItemsList } from '../data';
import Product from '../Componenets/Product';

const Trendings = (props) => {

  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

    return (
        <div>
            <Announcements />
            <Navbar />
            <Title title='Trending Products'/>
            <div style={{display: 'flex', justifyContent: 'space-between',}}>
            <div className='filter-container'>
            <span className='filter-text'>Filter products:</span>        
            <select className='select'>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className='select'>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter-container">
          <p className='filter-text'>Sort products:</p>
          <select className="select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
          </div>
            </div>
            <div className="items-container">
              {producItemsList.slice(5, 13).map((item) => (
              <Product item={item} key={item.id} />
            ))}
            </div>
            <div className="button" style={{ marginBottom: '5rem', margin: "auto"}}>
                      <ButtonAnim value = 'View More'/>
            </div>                      
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Trendings
