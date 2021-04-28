import { Card } from "react-bootstrap";
import React from "react";
class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({
      selected: this.state.selected ? false : true,
    });
  };

  render() {
    let inlineStyle = {};
    if (this.state.selected === true) {
      inlineStyle = {
        backgroundColor: "#EEEEF0",
        transform: "scale(1.04)",
        transition: "all 0.2s ease",
      };
    }
    return (
      <Card onClick={this.handleClick} style={inlineStyle}>
        <Card.Img variant='top' src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
