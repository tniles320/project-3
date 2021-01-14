import React from "react";
import "./style.css";
import gigspic from "../../assets/gigs1.jpg"
//import { Button } from 'react-native-elements';
//import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fas fa-comment-dollar } from '@fortawesome/free-solid-svg-icons'


function HomeCard(props) {
  const { handleLogin, handleRegister, createAccount } = props;
  return (
    <div>
      <h3 className="header">
        Are you looking for work or looking to get some work done?
      </h3>

      <div className="create-account">
        <div className="description">
          <p>
            Need a job nearby? Looking for some work to be done? Whether it's assembling furniture,
            setting up surround sound, walking a dog, or creating an interactive
            website. MANY GIGS is for YOU! 
          </p>
          <h1>Login</h1>
          <div className="login">
            
            <input type="text" id="username-login" placeholder="username" />
            
            <input type="password" id="password-login" placeholder="password" />
            <p></p>
            <button id ="loginBtn"onClick={handleLogin}>Submit</button>
          </div>
        </div>

        <div className="register-container">
        <button id="create-account" onClick={createAccount}>
            Create new account
          </button>
          <div>
            
            <form id="register-info">
              <input type="text" id="username-input" placeholder="Username" />
              <input
                type="password"
                id="password-input"
                placeholder="Password"
              />
              <input type="email" id="email-input" placeholder="Email" />
              <input type="text" id="zip-input" placeholder="Zip Code" />

              <button id ="regBtn"onClick={handleRegister}>Submit</button>
              <p>Once your account is complete you will be able to post and or accept job offers of all kinds.</p>
            </form>

          
          </div>
          

          <div className="logo">ManyGigs<i class="fas fa-comment-dollar"></i>
      </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
