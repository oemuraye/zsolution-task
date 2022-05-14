import './Header.css'
import { Link } from "react-router-dom";
import appLogo from '../../images/logo.jpg'

const Header = () => {

    const handleAuthentication = () => {
      
    };

  return (
    <div className="header">
      <div className="header__name">
        <img className="header__logo" src={appLogo} alt="app_logo" />
        <div className="header__motto">
          <h3>Auto Mart</h3>
          <p>Sharing your passion...</p>
        </div>
      </div>

      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
            {/* Hello {user?.email || "Guest"} */}
            Hello Guest
          </span>
          <span className="header__optionLineTwo">
            {/* {user ? "Sign Out" : "Sign In "} */}
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header