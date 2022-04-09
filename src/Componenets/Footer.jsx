import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import './components.css';


const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#0d5f5f',
      color: 'white'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <h1>Shop Online</h1>
        <p style={{margin: '20px 0px'}}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div style={{display: 'flex'}}>
          <div className="social-icons">
            <Facebook />
          </div>
          <div className="social-icons">
            <Instagram />
          </div>
          <div className="social-icons">
            <Twitter />
          </div>
          <div className="social-icons">
            <Pinterest />
          </div>
        </div>
      </div>
      <div style={{
        flex: 1,
        padding: '20px'
      }}>
        <h3>Useful Links</h3>
        <ul style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Woman Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div style={{
        flex: 1,
        padding: '20px'
      }}>
        <h1 style={{marginBottom: '30px'}}>Contact</h1>
        <div className="contact-ways">
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </div>
        <div>
          <MailOutline style={{marginRight:"10px"}} /> shop@online.com
        </div>
        <div style={{width: '50%'}} src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
  
  
  
  
  
  


  
  
  
  
  
 
  
 
  
  

  

  
