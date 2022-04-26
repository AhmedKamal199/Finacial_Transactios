import React, { useState, useEffect } from "react";
import url from "../config";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const Wa = () => {
  // const [name, Setname] = useState("");
  const [load, reload] = useState(false);
  const [wa, setWallet] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get(`${url}/api/wallets`);
    const Wallets = data.wallets;
    setWallet([...Wallets]);
    console.log(Wallets);
  }, [wa.length]);
  console.log(wa);
  return (
    <>
      <section className="my-5 border border-secondary">
        {/* <!-- <div className="container"> --> */}
        <div className="row lead m-2 ">
          <div className="col">Name</div>
          <div className="col">Amount</div>
          <div className="col">Last Transaction</div>
        </div>
        {wa.map(({ id, name, amount }) => (
          <div key={id} className="row bg-secondary  p-2 rounded-pill">
            <div className="col">
              <span className="lead">
                <img
                  src="favicon.ico"
                  style={{ width: "25px", display: "inline-block" }}
                  alt=""
                  className="mx-2"
                />
                {name}
              </span>
            </div>
            <div className="col lead">${amount}</div>
            <div className="col">Last Transaction</div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Wa;
