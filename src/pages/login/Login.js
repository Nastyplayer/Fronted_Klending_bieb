
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import React, {useContext, useState} from 'react';
import pic from '../../../../KLEDING_BIEB/src/assets/silk.jpg';

import Header from '../../components/header/Header';
import axios from "axios";




function Login() {

    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState( "");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   //const [unknown, setUnknown] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password)
        try {
            const response = await axios.post('http://localhost:8083/authenticate', {
                username: email,
                    password: password
            }
             );
            // if (response.status !== 201) {
            //     setUnknown(true);
            // }
            console.log('test: ', response);
           navigate('/account');
            login(response.data.jwt);
        } catch ( e ) {
            if(axios.isCancel(e)){
                console.log(' request was cancelled')
            } else {
                console.error(e)
            }
        }
    }
    //
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log({
    //         email: email,
    //         password: password
    //     })
    //     login(email);
    //     navigate('/Account');
    // }





    return (

        <p className="page2">
        <Header icon={pic}/>

            <ul className="form-xtra">

            <form onSubmit={handleSubmit}>

                <h1>Inloggen</h1>

                <label htmlFor="email">
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                           name="email" placeholder="username"/>
                </label>

                <label htmlFor="pass">
                    <input id="pass" value={password} onChange={(e) => setPassword(e.target.value)}
                           type="text" placeholder="password"/>
                </label>

                <button type="submit">Inloggen</button>
            </form>


                <p>Nog geen account? <Link to="/Subscription">Registreer</Link> je dan eerst.</p>


                
        </ul>
        </p>
    );

}

export default Login;

//(onSubmit)}>