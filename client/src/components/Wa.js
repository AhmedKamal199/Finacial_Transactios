import React, { useState, useEffect } from "react";
import url from "../config";
import axios from "axios";
const Wa = () => {
  const [name, Setname] = useState("");
  const [load, reload] = useState(false);
  const [wa, setWallet] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get(`${url}/api/wallets`);
    console.log(data.wallets);
    const Wallets = data.wallets;
    console.log(Wallets);
  }, []);
  return (
    <div className="wa-con">
      <div className="contanier">
        <h2 className="sub">Wallets</h2>
        <div className="items">
          <div className="item">
            <h1 className="test"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wa;
