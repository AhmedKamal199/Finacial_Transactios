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

const CategoryModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  function toggle() {
    setModal(!modal);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const newCategory = {
      name
    };
    await axios.post(`${url}/api/category`, newCategory);
    // Add item via addItem action
    //  addItem(newItem);
    console.log(newCategory);
    // Close modal
    toggle();
  };

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
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Category's Name"
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
