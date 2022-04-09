import styled from "styled-components";
import {mobile} from "../responsive";
import './pages.css';

const Login = () => {
  return (
    <div className="login-container">
      <div style={{
        width: '25%',
        padding: '20px',
        backgroundColor: 'white',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 300,
        }}>SIGN IN</h1>

        <form style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <input className="input" placeholder="username" />
          <input className="input" placeholder="password" />
          <button className="btn-login">LOGIN</button >
          <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;

