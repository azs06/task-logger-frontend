import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card">
                <header className="card-header grid--column formHeader">
                    <p className="card-header-title">Login</p>
                    <h3 className="subtitle is-6">
                        Don't have an account?
                        <Link to="/signup"> Signup</Link>
                    </h3>
                </header>
                <div className="card-content">
                <p className="field">
                    <input placeholder="username" className="input" type="text"/>
                </p>
                <p className="field">
                    <input placeholder="password" type="password" className="input"/>
                </p>
                <div className="field loginButton">
                    <p><a href="#">Forgot password?</a></p>
                    <button className="button is-primary">Login</button>
                </div>
                </div>
            </div>
        );
    }
}