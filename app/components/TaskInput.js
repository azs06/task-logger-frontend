import React from 'react';

export default class TaskInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
    <div className="field has-addons">
        <p className="control is-expanded">
            <input className="input" type="text" placeholder="Take a note.." />
        </p>
        <p className="control">
            <button className="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
                </svg>

            </button>
        </p>
</div>
);
    }
}