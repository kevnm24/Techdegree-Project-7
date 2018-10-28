import React, {Component} from 'react';

export default class SearchForm extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({searchText: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.userSearch.value);
    e.currentTarget.reset();
  }

  render(){
    return (
      <form class='search-form' onSubmit={this.handleSubmit}>
        <input type='search' onChange={this.onSearchChange} name='search' ref={(input) => this.userSearch = input} placeholder='search' />
          <button type='submit' class='search-button'><svg fill='fff' height='24' viewbox='0 0 23 23' width='24' xmlns='http://www.w3.org/2000/svg'></svg></button>
      </form>
    );
  }
}