import React from 'react';

export default class ActionMenuu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card card-menu has-text-left nav-action-menu">
                <div className="card-content">
                    <ul className="list--plain">
                        <li><a href="#" onClick={this.props.handleLogout}>Logout</a>
                        </li>
                        <li><a href="#">Edit Profile</a>
                        </li>
                    </ul>
                </div>
            </div>            
        )
    }
}