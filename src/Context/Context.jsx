import React, {createContext, useReducer, useContext} from 'react'
import { producItemsList } from '../data'
import { cartReducer } from './Reducers'

const Cart = createContext()

const products = producItemsList.map((item) => ({
    id: item.id,
    img: item.img,
    title: item.title,
    color: item.color,
    size: item.size,
    number: item.number
}))



const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, {products: products, cart: [] } )
    
   
    
    
    
    return (
        <Cart.Provider value = {{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context


export const CartState = () => {
    return useContext(Cart)
}