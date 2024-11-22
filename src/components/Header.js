import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact</h3>
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Header;