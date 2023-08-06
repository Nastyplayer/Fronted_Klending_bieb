
 import React, { useState} from "react";
 import {Link, useNavigate} from "react-router-dom";
 import axios from "axios";
 import pic from '../../../../KLEDING_BIEB/src/assets/cotton.jpg';
 import Header from "../../components/header/Header";
 import {useForm} from "react-hook-form";
 import Input from "../../components/input/Input";


 function Subscription() {

     const navigate = useNavigate();
     const {handleSubmit, formState: {errors}, register} = useForm();
     const [succesRegister, toggleSuccessRegister] = useState(true);




     async function registerUser(data) {
         try {

             const response = await axios.post('http://localhost:8083/users', data)
             if (response.status !== 201) {
                 toggleSuccessRegister(false);
             }
             navigate('/login')
         } catch (e) {
             console.error(e)
         }
     }
     return (
         <div className="page2">
             <Header icon={pic}/>
             <section className="form-xtra">
                 <form onSubmit={handleSubmit(registerUser)}>




                          <h1>Registreren</h1>

                         <label htmlFor="details-email">
                             E-mailadres :
                         <Input
                             id="email"
                             type="email"
                             name="emailadress"
                             placeholder="emailadres"
                             validationRules={{
                                 required: {
                                     value: true,
                                     message: 'Dit veld is verplicht',
                                 }
                             }}
                             register={register}
                             errors={errors}
                         />
                         </label>

                         <label htmlFor="details-gebruikersnaam">
                             Gebruikersnaam :

                         <Input
                             id="username"
                             type="username"
                             name="username"
                             placeholder="username"
                             validationRules={{
                                 required: {
                                     value: true,
                                     message: 'Dit veld is verplicht',
                                 }
                             }}
                             register={register}
                             errors={errors}
                         />
                         </label>


                         <label htmlFor="details-wachtwoord">
                             Wachtwoord :

                         <Input
                             id="password"
                             type="password"
                             name="password"
                             placeholder="wachtwoord"
                             validationRules={{
                                 required: {
                                     value: true,
                                     message: 'Dit veld is verplicht',
                                 }
                             }}
                             register={register}
                             errors={errors}
                         />
                         </label>
                         {!succesRegister &&
                             <h3>Something went wrong 😳 Please contact Administrator - jftalavera@hotmail.com</h3>}

                         <button
                             type="submit"

                         >
                             registreren
                         </button>

                 </form>
                 <p>Heb je al een account? Je kunt je <Link to="/Login">hier</Link> inloggen.</p>
             </section>
         </div>);
 }

 export default Subscription;














 /////////////////// oude en werkt //////////////////////////////////////////
//
// function Subscription() {
//     const {login} = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();
//     //const {handleSubmit, formState: {errors}, subscription} = useForm();
//     const {toggleSuccessRegister} = useState(true);
//     const token = localStorage.getItem('token');
//
//
//
//     async function registerUser(e) {
//         e.preventDefault()
//         console.log(email, password, username)
//         try {
//             const response = await axios.post('http://localhost:8083/users', {
//                 email: email,
//                 password: password,
//                 username: username,
//             })
//             if (response.status !== 201) {
//                 toggleSuccessRegister(false);
//             }
//             console.log(response)
//            // login(email);
//             navigate('/Account');
//
//
//         }  catch (e) {
//                 console.error(e)
//             }
//
//         }
//
//
//         return (
//
//
//             <p className="page2">
//
//
//                 <Header icon={pic}/>
//
//
//                 <ul className="form-xtra">
//
//                     <form onSubmit={registerUser}>
//
//                         <fieldset>
//                        <legend> <h1>Registreren</h1></legend>
//
//                             <label htmlFor="details-email">
//                             E-mailadres :
//                             <input
//                                 type="text"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </label>
//
//                         <label htmlFor="details-wachtwoord">
//                             Wachtwoord :
//                             <input
//                                 type="text"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </label>
//
//                         <label htmlFor="details-gebruikersnaam">
//                             Gebruikersnaam :
//                             <input
//                                 type="text"
//                                 id="username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </label>
//
//                         <button type="submit">Registreren</button>
//
//                     </fieldset>
//                     </form>
//
//                     <p>Heb je al een account? Je kunt je <Link to="/Login">hier</Link> inloggen.</p>
//
//
//                 </ul>
//
//             </p>
//        );
//
// }
//
// export default Subscription;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////