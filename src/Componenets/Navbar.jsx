import React, {useContext} from 'react'
import { ArrowRightAlt, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { CartState } from '../Context/Context';
import { Link } from 'react-router-dom';
import NavAnimation from '../Additions/NavAnimation';
import './components.css';
import { motion } from 'framer-motion';


const Navbar = () => {

    const {state: { cart }} = CartState();
    
    const animation1 = {
        hidden: {y: '-3rem',  opacity: 0, },
        show: { y: 0, opacity: 1,
        transition: { delay: .5, duration: 0.7, }
        }
      }

      const animation = {
        initial: {y: '-3rem'},
        whileInView: {y: 0,
        transition: {duration: 0.8}
      }}  

    return (
        <motion.div style={{
            height: '100px',
            backgroundColor: '#eeeeee'
            }}
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            >

            <div className="nav-wrapper">

            {/* Left side of navbar */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
            }}>
            <div className='logo'><Link to="/" className='link'>
                <img src="./img/logo.png" style={{
                  width: "100%",
                  height: "100%",
                  marginTop: '-11px',
                  marginLeft: '20px'
                }} />    
            </Link></div>
            </div>

            {/* Center of navbar */}
            <div style={{
                flex: 1,
                textAlign: 'center',
                marginTop: '-15px',
                
            }}>
                <ul className='navbar-link-container'>
                <li>
                    <Link to='/' className='link'>
                        <NavAnimation value='Home' />
                    </Link> 
                </li>
                
                <li>
                    <Link to='/productlist' className='link' >
                        <NavAnimation value='Products' />
                     </Link>
                </li>
                <li>
                    <Link to='/trendings' className='link'>
                        <NavAnimation value='Tranding' />    
                    </Link>
                </li>
                <li>
                    <Link to='/news' className='link'>
                        <NavAnimation value='News' />    
                    </Link>
                </li>
                </ul>
            </div>

            {/* Right side of a navbar*/}
            <div style={{
                flex: 1,
                marginTop: '-15px',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <div className="cart">
                <Link to='/cart' className='cart-link'>
                <Badge badgeContent={cart.length}color="secondary">
                    <ShoppingCartOutlined style = {{fontSize: '30px'}} />
                </Badge>
                </Link>
                </div>
                <div className="signin"><Link to='/login' className='link-black'> Sign In </Link></div>
                <div className='signup'><Link to='/register' className='link-white'> Sign Up </Link></div >
            </div>
            </div>
        </motion.div>
    )
}

export default Navbar;