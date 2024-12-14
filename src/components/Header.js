import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items"> 
        <h3>Online status: {onlineStatus ? "🟢" : "🔴"}</h3>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/about">About Us</Link></h3>
        <h3><Link to="/contact">Contact</Link></h3>
        <h3><Link to="/grocery">Grocery</Link></h3>
        <h3><Link to="/about">Cart</Link></h3>
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
