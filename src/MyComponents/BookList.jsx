//Create a BookList component. This component receives by props a list of books
//and displays them using the SingleBook component.

import React from "react";
import SingleBookEx3 from "./SingleBook";
import { Container, Col, Row, Form } from "react-bootstrap";

class ListTheBooks extends React.Component {
  state = {
    MySearch: "",
  };

  render() {
    return (
      <>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search Book"
            value={this.state.MySearch}
            onChange={(s) => this.setState({ MySearch: s.target.value })}
          />
        </Form.Group>

        <Container>
          <Row>
            {this.props.OneBook.filter(
              (b) => b.title.toLowerCase().indexOf(this.state.MySearch) !== -1
            ).map((b) => (
              <Col sm={4}>
                <SingleBookEx3 OneBook={b} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default ListTheBooks;
