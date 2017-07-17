import React from 'react';
import CardMenu from './CardMenu';

export default class TaskCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isMenuOn: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(e){
        e.preventDefault();
        this.setState({
            isMenuOn: !this.state.isMenuOn
        });
    }
    render(){
        let isMenuOn = this.state.isMenuOn;
        return(
            <div className="card">
                <div className="card-content">
                    <p className="title is-4">
                        “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <div className="level">
                        <div className="level-left">
                            <p>22/06/2015 3:25 PM</p>
                        </div>
                        <div className="level-right">
                            <a href="#" onClick={this.toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="2" />
                                    <circle cx="20" cy="12" r="2" />
                                    <circle cx="4" cy="12" r="2" />
                                </svg>
                            </a>
                            {
                                isMenuOn && <CardMenu />
                            }
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}