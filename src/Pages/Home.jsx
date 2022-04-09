import React from 'react'
import Cursor from '../Additions/Cursor'
import Announcements from '../Componenets/Announcements'
import Categories from '../Componenets/Categories'
import EcoFriendly from '../Componenets/EcoFriendly'
import Footer from '../Componenets/Footer'
import Navbar from '../Componenets/Navbar'
import Newsletter from '../Componenets/Newsletter'
import Products from '../Componenets/Products'
import Slider from '../Componenets/Slider'
import Trendings from '../Componenets/Trendings'

const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />  
            <Slider />
            <Categories />
            <Trendings />
            <EcoFriendly />
            <Products />
            <Newsletter />
            <Footer />          
        </div>
    )
}

export default Home
