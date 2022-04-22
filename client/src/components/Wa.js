import React, { useState, useEffect } from "react";
import url from "../config";
import axios from "axios";
const Wa = () => {
  const [name, Setname] = useState("");
  const [load, reload] = useState(false);
  useEffect(async () => {
    const { data } = await axios.get(`${url}/api/`);
    console.log(data.wallets[0]);
    Setname(data.name);
  }, []);
  return (
    <div className="wa-con">
      <div className="contanier">
        <h2 className="sub">Wallets</h2>
        <div className="items">
          <div className="item">
            <h1 className="test"></h1>
          </div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Wa;
