import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { uid } = this.props;
        if (uid) return <Redirect to="/" />
        return (
            <>
                <form onSubmit={this.handlesubmit} className="container" autoComplete="off" style={{ marginTop: "30px" }}>
                    <legend><h4>Sign Up</h4></legend>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handlechange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handlechange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    const { uid } = state.firebase.auth;
    return {
        uid,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: creds => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
