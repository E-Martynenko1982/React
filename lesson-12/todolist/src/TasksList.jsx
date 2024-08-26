import React, { Component } from 'react';
import Task from './Task';
import CreateClassInput from './CreateClassInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    this.fetchTasks()
  }

  fetchTasks = () => {
    fetchTasksList()
      .then(tasksList =>
        this.setState({
          tasks: tasksList
        }),
      )
  };

  onCreate = text => {
    const newTask = {
      text: text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks())
  }

  handleTaskStatusChange = (id) => {
    const task = this.state.tasks.find(task => Number(task.id) === id);

    if (!task) {
      console.error(`Задача с id ${id} не найдена.`);
      return;
    }
    // якщо задача знайдена - виконуємо деструктуризацію
    const { done, text } = task;
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks())


  }

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks())

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