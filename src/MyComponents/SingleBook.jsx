import React from "react";
import Card from "react-bootstrap/Card";
//import "bootstrap/dist/css/bootstrap.min.css";
//import { Container, Col, Row } from "react-bootstrap";
//import OneBook from "../romanceBooks.json";

// Create a SingleBook component as a function.
// The component receives a book object as a prop,
// and displays the cover and the title of the book.
// Use react-bootstrap Cards to display a book (The book object can be read from one of the .json
//     book files we gave you yesterday).

class SingleBookEx3 extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        keys={this.props.OneBook.asin}
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          width: "12rem",
          border: this.state.selected ? "inset 4px yellowgreen" : "none",
        }}>
        <Card.Img
          alt={this.props.OneBook.category}
          src={this.props.OneBook.img}
        />
        <Card.Body style={{ color: "black" }}>
          <Card.Title>{this.props.OneBook.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBookEx3;
