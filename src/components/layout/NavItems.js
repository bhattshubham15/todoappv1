import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../actions/authActions'

class NavItems extends Component {
    render() {
        const { uid } = this.props;
        if (uid) {
            return (
                <>
                    <Link className="nav-link" to="" onClick={this.props.signOut} >
                        Log Out
                </Link>
                </>
            )
        } else {
            return (
                <>
                    <Link className="nav-link" to="/signup">
                        Sign Up
                </Link>
                    <Link className="nav-link" to="/signin">
                        Sign In
                </Link>
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    const { uid } = state.firebase.auth;
    return {
        uid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
