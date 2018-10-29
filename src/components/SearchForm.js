import React, {Component} from 'react';

export default class SearchForm extends Component {

// sets state of serchterm
  state = {
    searchText: ''
  }

// when the text in the search input changes it will set its value into the searchTerm
  onSearchChange = e => {
    this.setState({searchText: e.target.value});
  }

// when searchform is submitted onSearch function is used on the search bar input
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.userSearch.value);
    e.currentTarget.reset();
  }

// this renders the search bar
  render(){
    return (
      <form class='search-form' onSubmit={this.handleSubmit}>
        <input type='search' onChange={this.onSearchChange} name='search' ref={(input) => this.userSearch = input} placeholder='search' />
          <button type='submit'>Search</button>
      </form>
    );
  }
}
