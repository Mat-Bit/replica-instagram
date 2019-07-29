import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

// Componente (em formato de funcao ou classe): Trecho de codigo que pode ser isolado do restante
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    );
}

export default App;


