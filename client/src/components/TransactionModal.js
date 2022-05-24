import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import url from "../config";
const TransactionModal = ({ Wal, Cat, onNew }) => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [WalletId, setWalId] = useState(0);
  const [CateId, setCatId] = useState("");
  // const [New, setnew] = useState(false);

  const ShowWallet = (
    <select
      class="custom-select m-2"
      id="inputGroupSelect01"
      onChange={e => setWalId(e.target.value)}
    >
      {Wal.map(({ id, name }) => (
        <>
          <option selected disabled hidden>
            Choose...
          </option>
          <option key={id} value={id}>
            {name}
          </option>
        </>
      ))}
    </select>
  );

  const RecWallet = (
    <select class="custom-select m-2" id="inputGroupSelect01">
      {Wal.map(({ id, name }) => (
        <>
          <option selected disabled hidden>
            Choose...
          </option>
          <option
            key={id}
            value={id}
            disabled={id == WalletId && true}
            hidden={id == WalletId && true}
          >
            {name}
          </option>
        </>
      ))}
    </select>
  );

  const ShowCategories = (
    <select
      class="custom-select m-2"
      id="inputGroupSelect01"
      onChange={e => setCatId(e.target.value)}
    >
      {Cat.map(({ id, name }) => (
        <>
          <option selected disabled hidden>
            Choose...
          </option>
          <option key={id} value={id}>
            {name}
          </option>
        </>
      ))}
    </select>
  );

  function toggle() {
    setModal(!modal);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const newTransaction = {
      type,
      amount
    };
    // Add item via addItem action
    await axios.post(
      `${url}/api/transaction/wa/${WalletId}/ca?${CateId}`,
      newTransaction
    );
    //  addItem(newItem);
    console.log(newTransaction);
    onNew = true;
    console.log(onNew);
    // Close modal
    toggle();
  };
  return (
    <>
      <button className="btn bg-dark text-light mx-2" onClick={toggle}>
        Add Transaction
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Transaction</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label>Transaction Type</Label>
              <select
                class="custom-select m-2"
                id="inputGroupSelect01"
                onChange={e => setType(e.target.value)}
              >
                <option selected disabled hidden>
                  Choose...
                </option>
                <option value="Income">Income</option>
                <option value="Expeness">Expeness</option>
                <option value="Transfer">Transfer</option>
              </select>
              <div className="row lead m-2 ">
                <div className="col">
                  {ShowWallet} id = {WalletId}
                </div>
                {type === "Transfer" && <div className="col">{RecWallet}</div>}
                {type === "Expeness" && (
                  <div className="col">{ShowCategories}</div>
                )}
              </div>
              <Label for="Amount">Amount</Label>
              <Input
                type="number"
                name="amount"
                id="amount"
                min="1"
                placeholder="Enter the amount of the transaction"
                onChange={e => setAmount(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add New Transaction
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TransactionModal;
