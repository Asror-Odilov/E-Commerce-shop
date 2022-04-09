import { Send } from "@material-ui/icons";
import './components.css';

const Newsletter = () => {
  return (
    <div className='news-container'>
      
      <h1 style={{
        fontSize: '70px',
        marginBottom: '20px',
      }}>Newsletter</h1>
      
      <p style={{
        fontSize: '24px',
        fontWeight: 300,
        marginBottom: '20px',
      }}>Get timely updates from your favorite products.</p>

      <div className="news-input-con">
        <input placeholder="Your email" style={{
           border: 'none',
           flex: 8,
           paddingLeft: '20px'
        }}/>
        <button style={{
          flex: 1,
          border: 'none',
          backgroundColor: 'teal',
          color: 'white',
          cursor: 'pointer',
        }}>
          <Send />
        </button>
      </div>
      
    </div>
  );
};

export default Newsletter;

  
