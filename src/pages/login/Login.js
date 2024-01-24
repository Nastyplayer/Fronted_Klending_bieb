
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import React, {useContext, useState} from 'react';
import Header from '../../components/header/Header';
import axios from "axios";
import pic from "../../assets/silk.jpg";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";



function Login() {

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState( "");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, toggleError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password)
        toggleError(false);
        try {
            const response = await axios.post('http://localhost:8083/authenticate', {
                username: username,
                    password: password
            }
             );

            console.log('test: ', response);
           navigate('/Account');
            login(response.data.jwt);
        } catch ( e ) {
            if(axios.isCancel(e)){
                console.log(' request was cancelled')
            } else {
                console.error(e)
                toggleError(true);
            }
        }
    }





    return (

        < p className="page2"  >
        <Header icon={pic}/>

          <Main>
              <form className="form-xtra"
                     onSubmit={handleSubmit}>

               <fieldset>
                <legend><h1>Inloggen</h1></legend>

                <label htmlFor="username">
                    <input id="username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           name="username"
                           placeholder="username"/>
                </label>

                <label htmlFor="pass">
                    <input id="pass"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           name="password"
                           placeholder="password"/>
                </label>

                {error && <p className="error-msg">Inloggen mislukt !!
                    Gebruikersnaam of wachtwoord onjuist</p>}


                <Button type="submit">
                    Inloggen
                </Button>

                   <p>Nog geen account? <Link to="/Subscription">Registreer</Link> je dan eerst.</p>


               </fieldset>


            </form>




          </Main>

           <Footer description="Copyright © 2023 LaBruja. Alle rechten voorbehouden."
               />
        </p>
    );

}

export default Login;

