import React from "react";

const AppNavbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h2 className="title">
              {/* <i className="fa-solid fa-wallet"></i> */}
              Fin
              {/* <!--acial Transactions --> */}
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
      </nav>
    </div>
  );
};

export default AppNavbar;
