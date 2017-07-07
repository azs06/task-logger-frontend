import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Hello React!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));