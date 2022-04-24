import React, { useState, useEffect } from "react";
import url from "../config";
import axios from "axios";
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
    <div className="wa-con">
      <div className="contanier">
        <h2 className="sub">Wallets</h2>
        <button>Add Wallet</button>
        <div className="items">
          {wa.map(({ id, name, amount }) => (
            <div className="item" key={id}>
              <h1 className="test"> {name} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wa;
