import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';

// Ampliación - Añade un nuevo estado “urgente” para las tareas. Al pulsar un nuevo botón se
// marcará la tarea como urgente, y podrá ser completada igual que las otras

class App extends Component{
  constructor() {
    super();
    this.tasks = [
      { text: "Tarea 1", completed: false, urgent: false },
      { text: "Tarea 2", completed: false, urgent: false },
      { text: "Tarea 3", completed: false, urgent: false },
      { text: "Tarea 4", completed: true, urgent: false }
    ];
    this.state={
      tasks: this.tasks
    };

    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.taskAction = this.taskAction.bind(this);
    
    this.orderByCompleted = this.orderByCompleted.bind(this);
    this.orderByActived = this.orderByActived.bind(this);
    this.orderByUrgent = this.orderByUrgent.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);

    this.taskUrgentAction = this.taskUrgentAction.bind(this);

  }

  addTask(task) {
    if( task.text ){
      this.tasks.push(task);
      this.setState({ tasks: this.tasks });
    }
  }

  saveTask(index, task) {
    if( task.text ) {
      this.tasks[index] = task;
      this.setState({ edit: null });
      this.setState({ tasks: this.tasks });
    }
  }
 
  removeTask(index) {
    if( index >= 0 && this.state.tasks.length > 0 ){
      this.tasks.splice(index, 1);
      this.setState({ tasks: this.tasks });
    }
  }

  editTask(index) {
    if( index >= 0 && this.state.tasks.length > 0 ) {
      var task = this.state.tasks[index];
      task.index = index;
      this.setState({ edit: task });
    }
  }

  orderByCompleted() {
    var completedTasks = this.tasks.filter( (task) => task.completed);
    this.setState({ tasks: completedTasks });
  }

  orderByActived() {
    var activedTasks = this.tasks.filter( (task) => !task.completed);
    this.setState({ tasks: activedTasks });
  }

  orderByUrgent() {
    var urgentTasks = this.tasks.filter( (task) => task.urgent);
    this.setState({ tasks: urgentTasks });
  }

  getAllTasks() {
    this.setState({ tasks: this.tasks });
  }

  taskAction(index) {
    var taskSelected = this.tasks[index];
    taskSelected.completed = !taskSelected.completed;
    this.setState({ tasks: this.tasks });
  }

  taskUrgentAction(index) {
    var taskSelected = this.tasks[index];
    taskSelected.urgent = !taskSelected.urgent;
    this.setState({ tasks: this.tasks });
  }

  render() {
      return (
        <div>
          <ToDoForm
            completed={this.orderByCompleted}
            actived={this.orderByActived}
            urgent={this.orderByUrgent}
            all={this.getAllTasks}
            add={this.addTask}
            save={this.saveTask}
            edit={this.state.edit} />
              <ToDoList
                tasks={this.state.tasks}
                remove={this.removeTask}
                edit={this.editTask}
                taskAction={this.taskAction}
                taskUrgentAction={this.taskUrgentAction} />
        </div>
      );
  }
}

export default App;