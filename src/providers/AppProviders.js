import { GlobalStyles } from 'assets/styles/GlobalStyles';
import React from 'react';

const AppProviders = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default AppProviders;
