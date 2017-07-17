import React from 'react';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <div>
            <p className="control is-expanded has-icons-right">
                    <input className="input" type="text" placeholder="Search" />
                    <span className="icon is-small is-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10.5" cy="10.5" r="7.5"/>
                <line x1="21" y1="21" x2="15.8" y2="15.8"/>
              </svg>
            </span>
            </p>               
           </div>     
        );
    }
}