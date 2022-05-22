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
const TransactionModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  function toggle() {
    setModal(!modal);
  }

  function onSubmit(e) {
    e.preventDefault();
    const newItem = {
      name
    };
    // Add item via addItem action
    //  addItem(newItem);
    console.log(newItem);
    // Close modal
    toggle();
  }
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
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placehodler="Transaction's Name"
                onChange={e => setName(e.target.value)}
              ></Input>
              <Label>Transaction Type</Label>
              <select
                class="custom-select m-2"
                id="inputGroupSelect01"
                onChange={e => setType(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Income">Income</option>
                <option value="Expeness">Expeness</option>
                <option value="Transfer">Transfer</option>
              </select>
              <div className="row lead m-2 ">
                <div className="col">Wallet Id</div>
                {type === "Transfer" && <div className="col">Rec Wallet</div>}
                {type === "Expeness" && <div className="col">Cate</div>}
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
