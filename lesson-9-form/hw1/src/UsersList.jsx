import React from "react";
import Filter from "./Filter";
import User from "./User";
class UsersList extends React.Component {
  state = {
    filterText: ''
  }
  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  getFilteredUsers() {
    const { users } = this.props;
    if (!users || users.length === 0) {
      return [];
    }
    const { filterText } = this.state;

    return users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
  render() {
    const filteredUsers = this.getFilteredUsers();
    return (
      <>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    )
  }
}
export default UsersList;