
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from "./context/AuthContext";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>


);








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AuthContextProvider from "./context/AuthContext";
//
//
// ReactDOM.render(
//
//
//     <React.StrictMode>
//         <Router>
//             <AuthContextProvider>
//             <App/>
//             </AuthContextProvider>
//         </Router>
//     </React.StrictMode>,
//
// document.getElementById('root')
//
// );