import React from 'react';

class SearchBar extends React.Component {
  state = { term: ' ' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // TODO ; make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search_bar">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Video Search</label>
            <input type="text"
              onChange={this.onInputChange}
              value= {this.state.term} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;