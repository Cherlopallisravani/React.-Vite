import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  addTask = () => {
    if (this.state.input.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.input],
        input: "",
      }));
    }
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input className="mb-2"
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Add a new task"
        /><br></br>
        <button className="btn btn-primary " onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;