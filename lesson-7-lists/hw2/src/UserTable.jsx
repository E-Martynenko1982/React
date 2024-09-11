import React from 'react';
import UsersList from './UsersList';
import Pagination from './Pagination';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 3, // кількість користувачів на одній сторінці
    };
  }

  onPageChangeHandler = (page) => {
    const { usersPerPage } = this.state;
    const { users } = this.props;
    const totalPages = Math.ceil(users.length / usersPerPage);

    //Переконайтеся, що поточна сторінка не виходить за межі
    if (page > 0 && page <= totalPages) {
      this.setState({ currentPage: page });
    }
  }

  render() {
    const { currentPage, usersPerPage } = this.state;
    const { users } = this.props;
    const usersCount = users.length; // ініціюємо кількість всіх користувачів . В нас - 11

    // Логика пагинации 
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          usersCount={usersCount}
          onPageChange={this.onPageChangeHandler}
        />
        <UsersList users={currentUsers} />
      </div>
    );
  }
}

export default UserTable;
