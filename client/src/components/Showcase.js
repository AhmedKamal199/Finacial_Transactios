import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Showcase = () => {
  return (
    // <!-- Showcase -->
    <section class="bg-dark text-light text-center p-5 text-sm-start">
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Use <span class="text-warning">Our Application</span>
            </h1>
            <p class="lead">
              Orignize your Finacial Treatment and show the amount <br />
              of all transacitons. <br />
              Make Wallets and Categories for More Customization
            </p>
            <button
              class="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Learn More
            </button>
          </div>
          <img
            src="bg.png"
            alt=""
            class="img-fluid w-50 fluid d-none d-sm-block "
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
