import { Card } from "react-bootstrap";
//import FantasyBooks from 'fantasy-books.json';

const SingleBook = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <h3>Book of the month !</h3>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
