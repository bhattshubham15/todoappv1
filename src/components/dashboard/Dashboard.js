import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import AddTask from '../tasks/AddTask'
import Tasks from '../tasks/Tasks'

class Dashboard extends Component {
    render() {
        const { uid } = this.props;
        if (!uid) return <Redirect to='/signin' />
        return (
            <>
                <AddTask />
                <Tasks />
            </>
        )
    }
}

const mapStateToProps = state => {
    const { uid } = state.firebase.auth;
    return {
        uid,
    }
}

export default connect(mapStateToProps)(Dashboard);
