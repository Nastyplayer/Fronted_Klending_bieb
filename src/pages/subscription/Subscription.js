
 import React, { useState} from "react";
 import {Link, useNavigate} from "react-router-dom";
 import axios from "axios";
 import Header from "../../components/header/Header";
 import {useForm} from "react-hook-form";
 import Input from "../../components/input/Input";
 import pic from "../../assets/cotton.jpg";
 import Main from "../../components/main/Main";
 import Footer from "../../components/footer/Footer";

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

         <>
         <Main className="page2">
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
         </Main>
         <Footer description="Copyright © 2023 Javier Talavera. Alle rechten voorbehouden."
         />

         </>

     )}

 export default Subscription;




////////////////////////////////////////////////////////////////////////////////////////////////////