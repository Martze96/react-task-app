import React, {Component} from "react";
import Overview from "./components/Overview";
import './components/App.css';
import uniqid from "uniqid";

class App extends Component {

  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        taskNumber: 1,
      },
      tasks: [],
    };

  }
  //Wenn Task Name eingetippt wird
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        taskNumber: this.state.task.taskNumber,

      },
    });
  };

  //Nachdem Submit gedrückt wird, Props wieder ready für nächste Task machen
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        taskNumber: this.state.task.taskNumber +1,

      },
    });
  };

  onDeleteClick = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.taskNumber !== Number(e.target.id))
    });
  };






  render() {
    const {task, tasks } = this.state;
    return (
      <div className="Wrapper">
        <div className="MenuBar">
        <form onSubmit={this.onSubmitTask} className="Form">
          <label htmlFor="taskInput" className="EnterLabel">Enter task:</label>
          <input 
          className="inputTask"
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id="taskInput"
          />
          <button type="submit" className="submitButton">
            Add Task
          </button>
        </form>
        </div>
        <Overview tasks={tasks} deleteEvent = {this.onDeleteClick}  />
      </div>
    );
  }
}

export default App;
