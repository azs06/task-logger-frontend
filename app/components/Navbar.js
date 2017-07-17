import React from 'react';
import NavMenu from './NavMenu';
import SearchInput from './SearchInput';

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            isMenuOn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogin(e){
        e.preventDefault();
        this.setState({
            isLoggedIn: true
        });
    }
    toggleMenu(e){
        e.preventDefault();
        this.setState({
            isMenuOn: !this.state.isMenuOn
        });
    }
    handleLogout(e){
        e.preventDefault();
        this.setState({
            isLoggedIn: false,
            isMenuOn: false
        });
    }
    render(){
        let isLoggedIn = this.state.isLoggedIn;
        let isMenuOn = this.state.isMenuOn;
        return(
    <nav className="nav has-shadow">
        <a href="#" className="nav-item">
        Task Logger
      </a>
        <div className="nav-item nav-search">
            <div className="field is-fullwidth">
                <SearchInput />
            </div>
        </div>
        {
            !isLoggedIn && 
            <a className="nav-item" href="#" onClick={this.handleLogin}>
                Login
            </a>
        }
        {
          isLoggedIn && 
        <div className="nav-item is-tab">
            <a onClick={this.toggleMenu} className="nav-item nav-menu">
                <span>Username</span>
                <span className="icon icon-chevron">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
            </a>
            {
              isMenuOn &&
                <NavMenu 
                handleLogout={this.handleLogout} 
                />   
            }
 
        </div> 
        }
   
    </nav>
        );
    }
}