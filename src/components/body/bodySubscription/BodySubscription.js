
import React, { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

import {useForm} from "react-hook-form";
// import pic from "../../assets/cotton.jpg";

import Main from "../../main/Main";
import Article from "../../article/Article";
import Header from "../../header/Header";
import Input from "../../input/Input";
// import Img from "../../../assets/cotton.jpg";


function BodySubscription(pic = pic) {

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
        // <div className="page2">
        //     <Header icon={pic}/>
        <>

            <Header/>


            <Main>
                <section className="wrapper-container-about">
                    <div className="article-container-about">
                        {/*<section className="form-xtra">*/}
                        <Article>
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
                        </Article>
                    </div>


                    <aside>
                        <div className="image-container-about">
                            {/*<img src={pic} alt="cotton"/>*/}

                        </div>
                    </aside>


                </section>
            </Main>

            {/*// </div>);*/}

        </>
    );
}

export default BodySubscription;




////////////////////////////////////////////////////////////////////////////////////////////////////