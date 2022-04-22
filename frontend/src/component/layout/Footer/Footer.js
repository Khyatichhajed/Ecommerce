import React from 'react'
import playstore from "../../../images/playstore.png"
import appStore from "../../../images/appstore.png"
import "./Footer.css"
const Footer = () => {
    return (
        <footer id="footer">
          <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playstore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
          </div>
    
          <div className="midFooter">
            <h1>Hamar Bajar.</h1>
            <p>High Quality is our first priority</p>
    
            <p>Copyrights 2021 &copy; khyatichhajed</p>
          </div>
    
          <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://instagram.com/khyatichhajed21">Instagram</a>
            <a href="https://www.facebook.com/khyati.chhajed.1">Facebook</a>
          </div>
        </footer>
      );
    };    

export default Footer