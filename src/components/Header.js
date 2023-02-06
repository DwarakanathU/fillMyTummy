import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <img
          alt="logo"
          src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/c81ffe0be8a8b2d35013270b9aa3d7f8/44afae87-94fa-4c53-be46-67121b459a35_rw_1920.png?h=a8357440874876104c243ffd583eebe4"
        />
      </a>
      <div className="right">
        <li>Products</li>
        <Link to="/about">
          <li>About </li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </div>
      <div className="loginout">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>LogIN</button>
        )}
      </div>
    </div>
  );
};

export default Header;
