import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sober';
import './i18n';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
