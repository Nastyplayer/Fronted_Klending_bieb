import {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import axios from "axios";
import jwtDecode from "jwt-decode";


export const AuthContext = createContext({}) ;

function AuthContextProvider({children}) {


    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();




    function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        void fetchUserData(token, decodedToken.sub, "/account");
    }


    async function fetchUserData(token, sub, redirect) {
        try {

            const response = await axios.get(`http://localhost:8083/users/${sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

            console.log(response.data)
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    authority: response.data.authorities[0].authority
                },
                status: "done"
            });
            // refreshes other than account page, the page will refresh it
            if (redirect) {
                navigate(redirect);
            }
        } catch (e) {
            console.error(e);
            setAuth({
                ...auth,
                status: "done",
            })
        }
    }

    function logout() {
        setAuth( {isAuth: false, user: null,
            status: "pending",});
        localStorage.removeItem("token");
        console.log("Gebruiker is uitgelogd!");
        navigate ('/');
    }

    const data = {
        login: login,
        logout: logout,
        isAuth: auth.isAuth,
        user: auth.user,
        status: auth.status,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;

