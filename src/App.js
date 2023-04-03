import React from 'react';
import './GlobalStyle.css'
import SiteProvider from './context/SiteContext'
import Balance from './components/balance/Balance';

function App() {
    
    return(
        <SiteProvider>
            <Balance />
        </SiteProvider>
    );
  
}

export default App;
