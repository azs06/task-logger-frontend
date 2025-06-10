import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';
import HeaderBlock from './components/HeaderBlock.js';
import Home from './components/Home.js';
import Login from './components/LoginForm.js';
import Signup from './components/SignupForm.js';
import SearchPage from './components/SearchPage.js';
import ResultsPage from './components/ResultsPage.js';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// Define a functional component for the button to use the useNavigate hook
const NavigateButton = () => {
  let navigate = useNavigate();
  return (
    <button type='button' onClick={() => navigate('/search')}>
      Click Me!
    </button>
  );
};

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <BrowserRouter>
            <div>
                <HeaderBlock />
                {/* <NavigateButton />  You can place this button where it was intended to be used */}
                <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route exact path="/search" element={<SearchPage />} />
                <Route path="/search/results" element={<ResultsPage />} />
                <Route path="*" element={ // Use path="*" for a catch-all route for "Not Found"
                            <div>
                               <p>Not Found!!</p> 
                            </div>    
                        } />
                </Routes>
            </div>
             </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));