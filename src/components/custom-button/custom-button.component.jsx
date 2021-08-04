import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn , inverted, ...otherProps }) => (
  <button className={`
  ${inverted ? 'invertedn': ''} 
  ${isGoogleSignIn ? 'google-sign-in': ''} 
  custom-button`} 
  {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
