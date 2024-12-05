import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Success from './pages/Success';

const App = () => {
    return (
        <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/success" element={<Success/>} />
        </Routes>
    );
};

export default App;