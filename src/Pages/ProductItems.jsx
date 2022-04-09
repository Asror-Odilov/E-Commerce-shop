import { useEffect } from "react";
import Product from "../Componenets/Product";
import {producItemsList} from '../data'
import './pages.css';



const ProductItems = ({value}) => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
   
    <div className="items-container">
      {producItemsList.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
    
    </>
  );
};

export default ProductItems;
  

