import React, { Component } from 'react';

class ToDoForm extends Component{
    
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(newProps){
        if(newProps.edit){
            this.refs.task.value = newProps.edit.text;
        }
    }

    handleAddSave = () => {
        var task;
        if(this.props.edit){
            task = {
                text: this.refs.task.value,
                completed: this.props.edit.completed
            };
            this.props.save( this.props.edit.index, task );
        } else {
            task = {text: this.refs.task.value, completed: false};
            this.props.add( task );
        }
        this.refs.task.value = '';
    }

    render() {
        return (
            <div className="jumbotron padded">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Task" ref="task" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button type="button" onClick={this.handleAddSave} className="btn btn-primary btn-block">{this.props.edit ? 'Save' :'Add'}</button>
                        </div>
                        <div className="col-md-3">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.props.completed}>Completas</button>
                            <button type="button" className="btn btn-primary btn-block" onClick={this.props.actived}>Activas</button>
                            <button type="button" className="btn btn-primary btn-block" onClick={this.props.urgent}>Urgentes</button>
                            <button type="button" className="btn btn-primary btn-block" onClick={this.props.all}>Todas</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ToDoForm;
                