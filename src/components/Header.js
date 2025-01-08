import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(data);
  
  // Subscribing to the store by using Selector

  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  

  return (
    <div className="header flex justify-between items-center shadow-md">
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items flex p-10 items-center h-20 font-display font-medium"> 
        <h3 className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"}</h3>
        <h3 className="px-4"><Link to="/">Home</Link></h3>
        <h3 className="px-4"><Link to="/about">About Us</Link></h3>
        <h3 className="px-4"><Link to="/contact">Contact</Link></h3>
        <h3 className="px-4"><Link to="/grocery">Grocery</Link></h3>
        <h3 className="px-4 font-bold"><Link to="/cart">Cart ({cartItems?.length} items)</Link></h3>
        <button
          className="login rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" 
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}    >
          {btnName}
        </button>
        {/* <h3>{loggedInUser}</h3> */}
      </div>
    </div>
  );
}; 

export default Header;
