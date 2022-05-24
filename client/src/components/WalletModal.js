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
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import url from "../config";

const WalletModal = ({ onNew }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  function toggle() {
    setModal(!modal);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const newWallet = {
      name
    };
    await axios.post(`${url}/api/wallet`, newWallet);
    // Add item via addItem action
    //  addItem(newItem);
    console.log(newWallet);
    onNew = true;
    // Close modal
    toggle();
  };

  return (
    <>
      <button className="btn bg-primary text-light" onClick={toggle}>
        Add Wallet
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Wallet</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Wallet's Name"
                onChange={e => setName(e.target.value)}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add New Wallet
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default WalletModal;
