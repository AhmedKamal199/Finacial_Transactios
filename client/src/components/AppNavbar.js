import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const AppNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <i className="bi bi-wallet mx-3 bg-"></i>
            Finacial Transactions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Category
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;

{
  /* <nav>
  <ul>
    <li>
      <h2 className="title">
        {/* <i className="fa-solid fa-wallet"></i> *
        
      </h2>
    </li>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Transactions</a>
    </li>
    <li className="sig">
      <a href="#">About</a>
    </li>
    <li className="reg">
      <button className="btn g">Register</button>
    </li>
    <li>
      <button className="btn w">Sign in</button>
    </li>
  </ul>
</nav> */
}
