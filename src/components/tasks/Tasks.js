import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Task from './Task'

class Tasks extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <>
                <table className="table table-dark table-striped container" style={{ marginTop: "30px" }}>
                    <thead>
                        <tr className="text-info">
                            <th scope="col">Task</th>
                            <th scope="col">Added on</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks && tasks.map((item) => {
                                return (
                                    <Task task={item} key={item.id} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks: tasks,
        uid: state.firebase.auth.uid,
    }
}

export default compose(connect(mapStateToProps), firestoreConnect(ownProps => [{
    collection: 'tasks',
    where: ['authorId', '==', ownProps.uid],
    orderBy: ['date', 'desc']
}]
))(Tasks);
