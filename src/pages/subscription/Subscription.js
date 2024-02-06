
 import React, { useState} from "react";
 import {Link, useNavigate} from "react-router-dom";
 import axios from "axios";
 import {useForm} from "react-hook-form";
 import Input from "../../components/input/Input";
 import cotton from "../../assets/cotton.jpg";
 import Main from "../../components/main/Main";
 import Footer from "../../components/footer/Footer";
 import Button from "../../components/button/Button";
 import './Subscription.css';


 function Subscription() {

     const navigate = useNavigate();
     const {handleSubmit, formState: {errors}, register} = useForm();
     const [succesRegister, toggleSuccessRegister] = useState(true);
     const [loading, toggleLoading] = useState(false);
     const [error, toggleError] = useState(false);
     const [errorMessage, setErrorMessage] = useState("");

     async function registerUser(data) {
         toggleError(false);
         toggleLoading(true);
         try {

             const response = await axios.post('http://localhost:8083/users', data)
             if (response.status !== 201) {
                 toggleSuccessRegister(false);
             }
             navigate('/login')
         } catch (e) {
             console.error(e)
             toggleError(true);
             setErrorMessage("Er is een fout opgetreden, roep de administrator");
         }
         toggleLoading(false);
     }




     return (
      <>
          {loading && <p>Loading...</p>}
          {error && <p>{errorMessage}</p>}

          <Main className="outer-container-sub">
            <div className="inner-container-sub">
            <div className="cotton-1">

             <img src={cotton}/>



                 <form className="form-xtra"
                       onSubmit={handleSubmit(registerUser)}>


                     <fieldset>
                     <legend>Registreren</legend>

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


                         <Button
                             type="submit"
                         >
                             registreren
                         </Button>


                         <p>Heb je al een account? Je kunt je <Link to="/Login">hier</Link> inloggen.</p>

                     </fieldset>

                 </form>
                </div>

              </div>

            </Main>

         <Footer description="Copyright © 2023 LaBruja. Alle rechten voorbehouden."
         />

         </>

     )}

 export default Subscription;




