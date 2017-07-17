import React from 'react';

export default class CardMenu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card card-menu action-menu">
                <div className="card-content">
                    <ul className="list--plain">
                        <li><a href="#">Delete</a>
                        </li>
                        <li><a href="#">Edit</a>
                        </li>
                    </ul>
                </div>
            </div>            
        );
    }
}