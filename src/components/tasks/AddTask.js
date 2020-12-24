import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTask } from "../../actions/taskActions";

class AddTask extends Component {
    state = {
        task: '',
        checked: false
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
        // document.getElementById('addTaskForm').reset();
        this.setState({
            task: ''
        })
    }
    render() {
        return (
            <>
                <form id="addTaskForm" onSubmit={this.handlesubmit} className="container" autoComplete="off" style={{ marginTop: "30px" }}>
                    <legend><h4>Add a task</h4></legend>
                    <div className="form-group">
                        <label htmlFor="tast" className="form-label">Task</label>
                        <input type="text" className="form-control" id="task" aria-describedby="emailHelp" onChange={this.handlechange} value={this.state.task} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
            </>
        )
    }
}

const mapDIspatchToProps = (dispatch) => {
    return {
        addTask: task => dispatch(addTask(task))
    }
}

export default connect(null, mapDIspatchToProps)(AddTask);
