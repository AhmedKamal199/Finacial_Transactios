import React, { useState, useEffect } from "react";
import url from "../config";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryModal from "./CategoryModal";
import {
  Pen,
  PencilFill,
  GraphUpArrow,
  GraphDownArrow
} from "react-bootstrap-icons";
import TransactionModal from "./TransactionModal";
import WalletModal from "./WalletModal";
const Wa = () => {
  // const [name, Setname] = useState("");
  const [load, reload] = useState(false);
  const [wa, setWallet] = useState([]);
  const [trans, setTrans] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get(`${url}/api`);

    const Wallets = data.wallets;
    Wallets.map(({ Transactions }) => {
      setTrans([...Transactions]);
    });
    setWallet([...Wallets]);
  }, [wa.length]);

  const tran = type => {
    switch (type) {
      case "Income":
        return <GraphUpArrow color="green" />;
        break;
      case "Express":
        return <GraphDownArrow color="red" />;
        break;
    }
  };
  return (
    <>
      <section className="my-5 border border-secondary">
        <div className="row lead m-2 ">
          <div className="col">Name</div>
          <div className="col">Amount</div>
          <div className="col">Last Transaction</div>
        </div>

        <div className="m-2 d-sm-flex align-items-center justify-content-end">
          <CategoryModal />
          <TransactionModal />
          <WalletModal />
        </div>
        {wa.map(({ id, name, amount, Transactions }) => (
          <div key={id} className="row bg-secondary  p-2 rounded">
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
            <div className="col d-sm-flex justify-content-between lead">
              {Transactions.length === 0
                ? "No Transactions Yet"
                : (() => {
                    console.log(Transactions[Transactions.length - 1].type);
                    console.log(Transactions[Transactions.length - 1].amount);
                    switch (Transactions[Transactions.length - 1].type) {
                      case "Income":
                        return (
                          <div>
                            <GraphUpArrow
                              color="lightGreen"
                              className="h3 m-0"
                            />
                            {/* <span className="ml-0"> */}&nbsp;&nbsp;$
                            {Transactions[Transactions.length - 1].amount}
                            {/* </span> */}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })()}

              <div className="mb-2">
                <PencilFill
                  className="m-1"
                  style={{ color: "white", cursor: "pointer" }}
                />
                <span
                  className=" p-1  rounded mx-3  bg-danger
                "
                  style={{ color: "white", cursor: "pointer" }}
                >
                  &times;
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Wa;
