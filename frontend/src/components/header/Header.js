// import { useStateValue } from '../StateProvider';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as actionType from '../constants/actionTypes';

import './Header.css'
import { Link } from "react-router-dom";
import appLogo from '../../images/logo.jpg'
import { useState } from 'react';
// import decode from "jwt-decode";

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      dispatch({ type: actionType.LOGOUT });
      navigate('/');
      setUser(null);
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="header__name">
          <img className="header__logo" src={appLogo} alt="app_logo" />
          <div className="header__motto">
            <h3>Auto Mart</h3>
            <p>Sharing your passion...</p>
          </div>
        </div>
      </Link>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user?.result.lastName || "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In "}
            </span>
          </div>
        </Link>
        <Link to={user ? '/myPosts' : '/login'}>
          <div className='header__option'>
            <span className="header__optionLineTwo">
              {user ? "My Posts" : "Do you "}
            </span>
            <span className="header__optionLineOne">
              {user ? "View & Manage" : "want sell a Car?"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header