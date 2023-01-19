import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
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
        <li>About Us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <h1>Wellcome React </h1>
      <h3>Resturant App</h3>
    </>
  );
};
root.render(<App />);
