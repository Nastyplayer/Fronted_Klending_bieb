import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import axios from "axios";
import jwtDecode from "jwt-decode";

//
// export const AuthContext = createContext({});
//
// function AuthContextProvider({ children }) {
//     const [isAuth, toggleIsAuth] = useState(false);
//     const [username, setUsername] = useState("");
//     const navigate = useNavigate();
//     const [status ,setStatus] = useState("pending")
//
//
//     useEffect(()=> {
//
//         const storedToken = localStorage.getItem('token')
//
//         if ( storedToken ) {
//             const decodedToken = jwtDecode(storedToken)
//             if ( Math.floor( Date.now() / 1000 ) < decodedToken.exp) {
//                 console.log( "Gebruiker blijft ingelogd 🔓" )
//                 setUsername(decodedToken.sub)
//                 void login()
//             } else  {
//                 console.log( "De token is verlopen" )
//                 localStorage.removeItem( 'token' )
//             }    } else {
//
//             setStatus("done")
//             toggleIsAuth(false)
//             navigate("/")
//         }},[])
//
//
//     const noAuthAxios= axios.create( {
//         baseURL : 'http://localhost:8083'
//     });
//
//     const jwToken = localStorage.getItem('token')
//     const authAxios = axios.create( {
//         baseURL : 'http://localhost:8083',
//         headers : {
//             Authorization: `Bearer ${jwToken}`,
//         },
//     });
//
//     function login() {
//         toggleIsAuth(true);
//         setStatus("done");
//     }
//
//     function logout() {
//         console.log('Gebruiker is uitgelogd!');
//         localStorage.removeItem('token');
//         toggleIsAuth(false);
//         navigate('/');
//     }
//
//     const contextData = {
//         authAxios,
//         noAuthAxios,
//         username,
//         setUsername,
//         isAuth: isAuth,
//         login,
//         logout,
//         jwToken
//     };
//
//     return (
//         <AuthContext.Provider value={contextData}>
//             {status === "done" ? children :  <p>Loading...</p>}
//         </AuthContext.Provider>
//     );
// }
 //
// export default AuthContextProvider;
//
// //
export const AuthContext = createContext({}) ;

function AuthContextProvider({children}) {
    //   const [auth, toggleIsAuth] = useState ({

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();


    //
    // useEffect(() => {
    //         const storedToken = localStorage.getItem("token");
    //         if (storedToken) {
    //             //  used fetchUserData
    //             const decodedToken = jwtDecode(storedToken)
    //             if (Math.floor(Date.now() / 1000) < decodedToken.exp) {
    //                 void fetchUserData(storedToken, decodedToken.sub);
    //             }
    //         } else {
    //             // disable token set status done and render app
    //             setAuth({
    //                 ...auth,
    //                 isAuth: false,
    //                 user: null,
    //                 status: 'done',
    //             });
    //         }
    //     }, []
    // );


    function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        void fetchUserData(token, decodedToken.sub, "/account");
    }

//
//
//
//     // function login(email) {
//     //     //  toggleIsAuth(  {isAuth: true, user: email})
//     //     setAuth(  {isAuth: true, user: email})
//     //     console.log("Gebruiker is ingelogd met emaildres : ", email);
//     //     navigate ('/account');
//     // }
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

// //{auth.status === "done" ? children : <p>Loading...</p>}