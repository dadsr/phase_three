import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Login} from "./Components/Login/Login";
import {AlertProvider} from "./Alerts/AlertContext";
import AlertComponent from "./Alerts/AlertComponent";
import {Company} from "./Components/CompanyView/Company";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AlertProvider>
            <BrowserRouter>
                <AlertComponent />
                <Header/>
                <Company/>
                <Footer/>
            </BrowserRouter>
        </AlertProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
