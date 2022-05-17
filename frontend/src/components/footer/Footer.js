import { Typography } from '@mui/material';
import React from 'react'
import appLogo from '../../images/logo.jpg'

import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__name">
        <img className="footer__logo" src={appLogo} alt="app_logo" />
        <div className="footer__motto">
          <h3>Auto Mart</h3>
          <p>Sharing your passion...</p>
        </div>
      </div>

      <div className="footer__nav">
              <Typography variant='body2' color="#007FFF">© 2022 | rutech. All Rights Reserved</Typography>
      </div>
    </div>
  );
}

export default Footer