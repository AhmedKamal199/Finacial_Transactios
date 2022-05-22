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

const WalletModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
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
                placehodler="Wallet's Name"
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
