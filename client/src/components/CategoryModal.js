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
const CategoryModal = () => {
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
      <button className="btn bg-warning" onClick={toggle}>
        Add Category
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Category</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placehodler="Category's Name"
                onChange={e => setName(e.target.value)}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add New Category
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CategoryModal;
