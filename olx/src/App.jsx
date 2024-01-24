import Router from './config/router'
import Navbar from './views/NavBar';
import Footer from './views/NavBar/footer';
import React from 'react';
import './App.css'

function App() {
    return (
        <div className="App">
            
            <div className='App-header'>
                <Router />
            </div>
        </div>
    )
}

export default App;
