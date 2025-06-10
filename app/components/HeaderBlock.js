import React from 'react';
import Navbar from './Navbar';

export default class HeaderBlock extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header>
                <Navbar />
            </header>            
        );
    }
}