// The file that is used to connect to our DOM

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './App';

// initializing root to render the Application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);