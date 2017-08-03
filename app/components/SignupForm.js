import React from 'react';
import { Link } from 'react-router-dom';
export default class SignupForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card">
               <header className="card-header grid--column formHeader">
                    <p className="card-header-title">Signup</p>
                    <h3 className="subtitle is-6">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </h3>
                </header>                  
                <div className="card-content">  
                <p className="field">
                    <input placeholder="email" className="input" type="email"/>
                </p>    
                <p className="field">
                    <input placeholder="username" className="input" type="text"/>
                </p>
                <p className="field">
                    <input placeholder="password" type="password" className="input"/>
                </p>
                <div className="field loginButton">
                    <p><a href="#">Recover account?</a></p>
                    <button className="button is-primary">Submit</button>
                </div>
                </div>
            </div>
        );
    }
}