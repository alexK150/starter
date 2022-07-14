import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import AuthProvider from './auth/AuthProvider';
import ReduxProvider from './store/ReduxProvider';

ReactDOM.render(
    <ReduxProvider>
        <Router>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);
