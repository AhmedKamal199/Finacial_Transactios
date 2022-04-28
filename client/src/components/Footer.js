import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUp, ArrowUpCircle } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div>
      <footer
        id="about"
        className="p-5 text-center bg-dark text-white position-relative"
      >
        <div className="container">
          <p className="lead">Copyright &copy; 2022 Finacial Transactions</p>
          <a href="#" className="position-absolute bottom-0 p-5 end-0">
            <ArrowUpCircle size={50} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
