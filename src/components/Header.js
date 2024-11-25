import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items"> 
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact</h3>
        <h3>Cart</h3>
        <button
          className="login"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}    >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
