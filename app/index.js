import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css'
import Home from './components/Home'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));