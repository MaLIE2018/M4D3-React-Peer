import { Form, FormControl } from "react-bootstrap";
import React from "react";

class SearchBar extends React.Component {
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  render() {
    return (
      <Form>
        <FormControl
          type='text'
          placeholder='Search'
          className=''
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </Form>
    );
  }
}

export default SearchBar;
