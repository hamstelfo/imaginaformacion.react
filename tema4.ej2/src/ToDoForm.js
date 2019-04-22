import React, { Component } from 'react';
class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.handleAddSave = this.handleAddSave.bind(this);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.edit) {
            this.refs.task.value = newProps.edit.text;
        }
    }
    handleAddSave() {
        if (this.props.edit) {
            var task = {
                text: this.refs.task.value,
                completed: this.props.edit.completed
            };
            this.props.save(this.props.edit.index, task);
        } else {
            var task = { text: this.refs.task.value, completed: false };
            this.props.add(task);
        }
        this.refs.task.value = '';
    }
    render() {
        return (
            <div className="jumbotron padded">
                <form>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <input type="text" className="form-control"
                                    placeholder="Task" ref="task" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button type="button" onClick={this.handleAddSave}
                                className="btn btn-primary btn-block">{this.props.edit ? 'Save' :
                                    'Add'}</