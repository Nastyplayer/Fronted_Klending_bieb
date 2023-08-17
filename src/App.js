import React, {useContext} from 'react';
import './App.css';
import Account from './pages/account/Account';
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import ClothingLibrary from './pages/clothing library/Clothing Library';
import Navigation from './components/navigation/Navigation';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from "./pages/login/Login";
import {AuthContext} from "./context/AuthContext";
import Subscription from "./pages/subscription/Subscription";



function App() {
    const {isAuth} = useContext(AuthContext);
    return (
        <>

            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Subscription" element={<Subscription/>}/>
                <Route path="/Blog" element={<Blog/> }/>
                <Route path="/Account" element={isAuth ?<Account/> : <Navigate to="/Login"/>}/>
                <Route path="/Admin" element={isAuth ?  <Admin/> : <Navigate to ="/"/>}/>
                <Route path="/ClothingLibrary" element={<ClothingLibrary />}/>

            </Routes>
        </>
    );
}

export default App;

