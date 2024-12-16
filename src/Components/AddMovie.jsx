/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Rating from "@mui/material/Rating";

const AddMovie = ({ addMovieHandler }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
  });
  const addnewMovie = (e) => {
    e.preventDefault();
    addMovieHandler(newMovie);
    handleClose();
  };
  const onchangeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={onchangeHandler}
                name="title"
                type="text"
                placeholder="Enter Movie Title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={onchangeHandler}
                name="description"
                type="text"
                placeholder="Enter Movie Description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                name="posterURL"
                onChange={onchangeHandler}
                type="text"
                placeholder="Enter Movie PosterUrl"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Form.Label>Rating</Form.Label>
              <Rating
                max={10}
                name="simple-controlled"
                onChange={(event, newValue) => {
                  setNewMovie({ ...newMovie, rating: newValue });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addnewMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
