//import WarnSign from './components/WarnSign'
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
      filteredBooks: []
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText})
}

  render(){
    return (
      <>
      <SearchBar 
      filterText = {this.state.filterText} 
      onFilterTextChange = {this.handleFilterTextChange}/>,
      <BookList 
      books={this.props.books} 
      filterText = {this.state.filterText}/>
      </>
    )
  }
}

export default App;
