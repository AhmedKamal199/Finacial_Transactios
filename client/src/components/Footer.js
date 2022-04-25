import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div>
      <footer
        id="about"
        class="p-5 text-center bg-dark text-white position-relative"
      >
        <div class="container">
          <p class="lead">Copyright &copy; 2021 Finacial Transactions</p>
          <a href="#" class="position-absolute bottom-0 p-5 end-0">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
