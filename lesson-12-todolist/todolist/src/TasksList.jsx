import React, { Component } from 'react';
import Task from './Task';
import CreateClassInput from './CreateClassInput';

const baseUrl = 'https://6698d3872069c438cd7036bb.mockapi.io/api/V1/tasks';
class TasksList extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(tasksList => {
      this.setState({ tasks: tasksList });
    })
  }
  onCreate = text => {
    //1.Create task obj
    //2. Post obj
    //3. Fetch list from server
    //const { tasks } = this.state;
    const newTask = {

      text: text,
      done: false,
    }

    fetch(baseUrl, {
      method: "POST",
      headers: {
        'Content-Type': "application/json; charset=utf-8",
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("Failed to create task");
      }
    })
  };

  handleTaskStatusChange = (id) => {
    //1.Find task in state by id
    //2.Create updated task
    //3. Update task on server
    //4.Fetch update
    //1. find task in the list
    //2. Toggle done value
    //3. Save updated list
    const task = this.state.tasks.find(task => Number(task.id) === id);

    // Если задача не найдена, выйдите из функции или обработайте ошибку
    if (!task) {
      console.error(`Задача с id ${id} не найдена.`);
      return;
    }

    // Если задача найдена, выполните деструктуризацию
    const { done, text } = task;
    const updatedTask = {
      text,
      done: !done,
    };

    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json; charset=utf-8",
      },
      body: JSON.stringify(updatedTask),
    })
      .then(response => {
        if (response.ok) {
          this.fetchTasksList();
        } else {
          throw new Error("Failed to update task");
        }
      })
      .catch(error => console.error('Ошибка при обновлении задачи:', error));
  }

  handleTaskDelete = (id) => {
    //1. Filter tasks
    //2. Update state
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("Failed to create task");
      }

    })

  }
  render() {



    const sortedList = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done)
    return (
      <div className="todo-list">
        <CreateClassInput onCreate={this.onCreate} />
        <ul className='list'>
          {sortedList.map((task) => (
            <Task key={task.id}
              {...task}
              id={Number(task.id)}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}

        </ul>
      </div>

    );
  }
}



export default TasksList;