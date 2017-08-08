import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(e){
        e.preventDefault();
    }
    handleFocus(e){
        e.preventDefault();
        if(this.props.location.pathname === '/search/results' || this.props.location.pathname === '/search') return;
        this.props.history.push('/search');
    }
    handleChange(e){
        this.setState({
            searchInput: e.target.value
        });
        const searchParam = `?search=${e.target.value}`;
        //if(this.props.location.pathname === '/search/results') return;
        this.props.history.push({
            pathname: '/search/results',
            search: searchParam
        });
    }
    render(){
        return(
           <div>
            <p className="control is-expanded has-icons-right">
                <input 
                onFocus={ this.handleFocus }
                onChange={ this.handleChange }
                value={ this.state.searchInput } 
                className="input" 
                type="text" 
                placeholder="Search" 
                />
                    <span className="icon is-small is-right icon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="10.5" cy="10.5" r="7.5"/>
                            <line x1="21" y1="21" x2="15.8" y2="15.8"/>
                        </svg>
                    </span>
                    <a href="#" onClick={ this.handleClick } className="icon is-small is-right icon-cross">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
            </p>               
           </div>     
        );
    }
}
export default withRouter(SearchInput);