import React from "react";
import ToolBarDeskTop from "../../assets/topbar-desktop.png";
import Logo from '../../assets/logo.svg';
import styles from './index.module.css'
import Button from "../../utility/button";

function index(props) {
  return (
    <div className="navboxContainer">
      <img src={ToolBarDeskTop} alt="Description of the image" style={{width:"100%"}}/>
      <div className={styles.navbar}>
      <div className={styles.logo}>
       <img src={Logo} alt="Logo" />
      </div>
    <div className={styles.navLinks}>
       <a href="#">THIS MONTH</a>
        <a href="#">SKIN</a>
        <a href="#">HAIR</a>
        <a href="#">BATH</a>
        <a href="#">SALE</a>
      </div>
    <Button styles={styles.loginButton} text="Login >"/>
    </div>
    </div>
  );
}

export default index;


