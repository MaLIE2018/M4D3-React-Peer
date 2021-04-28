import SingleBook from "./SingleBook";
import React from "react";
import { CardColumns } from "react-bootstrap";
import "../styles/booklist.css";

class BookList extends React.Component {
  render() {
    const filterText = this.props.filterText;
    let books;
    if (filterText !== "") {
      let filteredBooks = this.props.books.filter((book) => {
        return book.title.toLowerCase().includes(filterText.toLowerCase());
      });
      books = filteredBooks;
    } else {
      books = this.props.books;
    }

    return (
      <CardColumns>
        {books.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </CardColumns>
    );
  }
}

export default BookList;
