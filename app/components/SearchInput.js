import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchInput = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();
    };

    const handleFocus = (e) => {
        e.preventDefault();
        if (location.pathname === '/search/results' || location.pathname === '/search') return;
        navigate('/search');
    };

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        const searchParam = `?search=${e.target.value}`;
        navigate({
            pathname: '/search/results',
            search: searchParam
        });
    };

    return (
        <div>
            <p className="control is-expanded has-icons-right">
                <input
                    onFocus={handleFocus}
                    onChange={handleChange}
                    value={searchInput}
                    className="input"
                    type="text"
                    placeholder="Search"
                />
                <span className="icon is-small is-right icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="10.5" cy="10.5" r="7.5" />
                        <line x1="21" y1="21" x2="15.8" y2="15.8" />
                    </svg>
                </span>
                <a href="#" onClick={handleClick} className="icon is-small is-right icon-cross">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </a>
            </p>
        </div>
    );
};
export default SearchInput;