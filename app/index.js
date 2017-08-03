import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';
import HeaderBlock from './components/HeaderBlock.js';
import Home from './components/Home.js';
import Login from './components/LoginForm.js';
import Signup from './components/SignupForm.js';
import SearchPage from './components/SearchPage.js';
import ResultsPage from './components/ResultsPage.js';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const Button = withRouter(({ history}) => (
        <button
        type='button'
            onClick={() => { history.push('/search') }}
        >
            Click Me!
        </button>
        ))
        return(
             <BrowserRouter>
            <div>
                <HeaderBlock />
                <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/search" component={SearchPage} />
                <Route path="/search/results" component={ResultsPage} />
                <Route render={function(){
                        return(
                            <div>
                               <p>Not Found!!</p> 
                            </div>    
                        )
                }} />
                </Switch>                     
            </div>
             </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));