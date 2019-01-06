import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Prevent form from submitting itself and then refreshing the page
  // Arrow function will always make sure that the value `this` is
  // always equal to our instance of the SearchBar
  onFormSubmit(event) {
    event.preventDefault();
    // `onSubmit` is a reference to the props in the SearchBar
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
