import { Link } from 'react-router-dom';
import {
  FavoriteBorderOutlined,
  InfoOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Cart, CartState } from "../Context/Context";
import './components.css';



const Product = ({ item }) => {
  
  const {
    state: { cart },
    dispatch,
  } = CartState();
  

  return (
    <div className="product-container">
      <div className="circle" />
      <img src={item.img} style={{height: '75%', zIndex: 2,}} />
      
      {/* Product info on hover */}
      <div className="product-info">
        
        {/* Add to card icon */}
        <div className="product-icon">
          <ShoppingCartOutlined  onClick = {() => {
            dispatch({type: 'ADD_TO_CARD', payload: item})
          }} />
        </div>

        {/* About product icon */}
        <div className="product-icon">
          <Link to= '/product' className="link-black">
          <InfoOutlined  onClick = {() => {
            dispatch({type: 'ABOUT_PRODUCT', payload: item})
          }} />
          </Link>
        </div>

        {/* Like product icon */}
        <div className="product-icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;