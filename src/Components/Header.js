import React from 'react'
import "./Header.css";
const Header = () => {
    return (
        <div className='nav'>
            <img className='nav__logo' src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="logo" />
            <select className='language'>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
            <button>Sign In</button>
        </div>
    )
}

export default Header
