import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Showcase = () => {
  return (
    // <!-- Showcase -->
    <section className="bg-dark text-light text-center p-5 text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Use <span className="text-warning">Our Application</span>
            </h1>
            <p className="lead">
              Orignize your Finacial Treatment and show the amount <br />
              of all transacitons. <br />
              Make Wallets and Categories for More Customization
            </p>
            <button
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Learn More
            </button>
          </div>
          <img
            src="bg.png"
            alt=""
            className="img-fluid w-50 fluid d-none d-sm-block "
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
