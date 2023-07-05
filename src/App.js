import React, {useContext} from 'react';
import './App.css';
import Account from './pages/account/Account';
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Appointments from './pages/appointments/Appointments';
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
                <Route path="/Appointments" element={isAuth ?  <Appointments/> : <Navigate to ="/"/>}/>
                <Route path="/ClothingLibrary" element={<ClothingLibrary />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </>
    );
}

export default App;

//  <Route exact path="/login" element={<Login/>}/>
//  <Route path="/subscription" element={<Subscription/>}/>
//  <Route path="/profile" element={isAuth ? <Profile/>  : <Navigate to="/Blog"/>}/>
//<Route exact path="/Login" element={isAuth ? <Login/>  : <Navigate to="/Blog"/>}/>
//  <Route exact path="/Login" element={<Login/>}/>

