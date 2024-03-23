import Router from './config/router'
import Navbar from './views/NavBar';
import Footer from './views/NavBar/footer';
import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
        <div className="App">
            
            <div className='App-header'>
                <Router />
            </div>
        </div>
        </PersistGate>
        </Provider>
    )
}

export default App;
