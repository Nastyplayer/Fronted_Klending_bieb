
import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import pic from '../../../../KLEDING_BIEB/src/assets/cotton.jpg';
import Header from "../../components/header/Header";
import {useForm} from "react-hook-form";

function Subscription() {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
   // const {handleSubmit, formState: {errors}, subscription} = useForm();
    const {toggleSuccessRegister} = useState(true);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log({
    //         email: email,
    //         password: password,
    //         gebruikersnaam: gebruikersnaam,
    //     })


    async function registerUser(e) {
        e.preventDefault()
        console.log(email, password, username)
        try {
            const response = await axios.post('http://localhost:8083/users', {
                email: email,
                password: password,
                username: username,
            })
            // if (response.status !== 201) {
            //     toggleSuccessRegister(false);
            // }
            console.log(response)
            // login(email);
            // navigate('/Account');
        } catch (e) {
            console.error(e)
        }

    }


        return (


            <p className="page2">
                <Header icon={pic}/>


                <ul className="form-xtra">

                    <form onSubmit={registerUser}>


                        <h1>Registreren</h1>

                        <label htmlFor="details-email">
                            E-mailadres :
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="details-wachtwoord">
                            Wachtwoord :
                            <input
                                type="text"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label htmlFor="details-gebruikersnaam">
                            Gebruikersnaam :
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <button type="submit">Registreren</button>

                    </form>

                    <p>Heb je al een account? Je kunt je <Link to="/Login">hier</Link> inloggen.</p>


                </ul>

            </p>


        );



}

export default Subscription;


/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////