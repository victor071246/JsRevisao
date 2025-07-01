import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/index';
import Routes from './routes';

function App() {
    return (
        <>
            <Header />
            <Routes />
            <GlobalStyles />
        </>
    );
}

export default App;
