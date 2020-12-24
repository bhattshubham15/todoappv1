import React, { Component } from 'react'
import moment from "moment";
import { removeTask, toggleChecked } from '../../actions/taskActions';
import { connect } from 'react-redux';
import Check from './Check';

class Task extends Component {
    handleRemove = (task) => {
        this.props.removeTask(task);
    }
    handleCheck = (task) => {
        this.props.toggleChecked(task);
    }
    render() {
        const { task } = this.props;
        return (
            <>
                <tr>
                    <th>{task.task}</th>
                    <td>{moment(task.date.toDate()).calendar()}</td>
                    <td>
                        <Check onClick={() => this.handleCheck(task)} checked={task.checked} />
                    </td>
                    <td>
                        <span className="material-icons text-danger" style={{ cursor: "pointer" }} onClick={() => this.handleRemove(task)}>
                            delete
                        </span>
                    </td>
                </tr>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: task => dispatch(toggleChecked(task))
    }
}

export default connect(null, mapDispatchToProps)(Task);
