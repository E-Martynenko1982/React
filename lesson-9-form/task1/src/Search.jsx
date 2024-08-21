import React from "react";

class Search extends React.Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  sendValue = (e) => {
    e.preventDefault();
    return alert(`Search text: ${this.state.value}`)
  }
  render() {




    return (
      <form className="search" onSubmit={this.sendValue}>
        <input type="text" className="search__input" onChange={this.handleChange} value={this.state.value} />
        <button className="search__button">Search</button>
      </form>
    )
  }
}
export default Search;