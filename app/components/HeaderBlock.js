import React from 'react';
import NavBar from './NavBar';

export default class HeaderBlock extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header>
                <NavBar />
            </header>            
        );
    }
}