


import Header from '../../components/header/Header';
import './Admin.css';
import bib from "../../assets/Mar_Bib.jpg";

import React, {useContext, useEffect, useRef, useState} from 'react';
import './Admin.css';
import axios from "axios";
import Input from "../../components/input/Input";
import {useForm} from "react-hook-form";

import Button from "../../components/button/Button";
import {Link, useNavigate} from "react-router-dom";

import {Subscription} from "../subscription/Subscription";
import {AuthContext} from "../../context/AuthContext";
import pic from "../../assets/hilado-en-huso.jpg";


// class Admin extends React.Component {
//     render() {




function Admin() {



    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState('');


    const [toDelete, setToDelete] = useState([]);
    const [items, setItems] = useState([]);
    //  const [deleteThisItem, toggleDeleteThisItem] = useState(false);
    //  const [singleItem, setSingleItem] = useState('');
    //  const [item_id, setItem_id] = useState(0);
    //  const [nameInfo, setNameInfo] = useState("");


    const [idToDelete, setIdToDelete] = useState("");


    const [subscriptions, setSubscriptions] = useState([]);
    const [subscriptionsList, setSubscriptionsList] = useState([]);

    // const [userInfo, setUserInfo] = useState("");
    // const [expirationDate, setExpirationDate] = useState("");
    // const [subscriptionStatus, setSubscriptionStatus] = useState("");
    // const [typeSubscription, setTypeSubscription] = useState("");
    const [patchThisSubscription, togglePatchThisSubscription] = useState(false);
    const [subscriptionIdToPatch, setSubscriptionIdToPatch] = useState("");

    // const { handleSubmit, formState: { errors4 } } = useForm();

    //patch user
    const {register, handleSubmit: handleSubmit1, formState: {errors}} = useForm();
    const [patchThisUser, togglePatchThisUser] = useState(false);
    const [userIdToPatch, setUserIdToPatch] = useState("");

    const {isAuth, user} = useContext(AuthContext);
    const [admin, toggleAdmin] = useState(false);

    const [clicks, setClicks]= useState(0);
    //mail

    const [userIdToEmail, setUserIdToEmail] = useState("");
    const [succesSendMail, toggleSuccesSendMail] = useState(false);

    const { register: register2, formState: {errors: errors2}, handleSubmit: handleSubmit2, reset} = useForm();
    const { register: register3, handleSubmit: handleSubmit3, reset: resetForm3, formState: { errors: errors3 } } = useForm();
    const { register: register4, handleSubmit: handleSubmit4, reset: resetForm4, formState: { errors: errors4 } } = useForm();
    const { register: register5, handleSubmit: handleSubmit5, reset: resetForm5, formState: { errors: errors5 } } = useForm();
    const { register: register6, handleSubmit: handleSubmit6, reset: resetForm6, formState: { errors: errors6 } } = useForm();
    const { register: register7, handleSubmit: handleSubmit7, reset: resetForm7, formState: { errors: errors7 } } = useForm();
    const { register: register8, handleSubmit: handleSubmit8, reset: resetForm8, formState: { errors: errors8 } } = useForm();
    const resetFormFields = () => {
        setSingleUser(""); // Clear the selected user value
        setToDelete([]); // Clear the selected item value
        setUserIdToPatch(""); // Clear the user id value for user patch
        setUserIdToEmail(""); // Clear the user id value for sending email
        toggleSuccesSendMail(false); // Reset email success state
        togglePatchThisUser(false); // Reset user patch state
        setSubscriptions( []);
        resetForm3();
        resetForm4();
        resetForm5();
        resetForm6();
        resetForm7();
        resetForm8();
    };

    // const refreshPage = () =>{
    //     setClicks(clicks +1 );
    //     window.location.reload();}


    // to get all users//////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {

        const controller = new AbortController();

        async function fetchUsers() {

            // toggleDeleteUser(false);
            togglePatchThisUser(false);


            try {
                const response = await axios.get('http://localhost:8083/users', {

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },


                    signal: controller.signal,
                });
                navigate('/Admin');
                setUsers(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        void fetchUsers();
        return function cleanup() {
            controller.abort();
        };
    }, []);


    // to delete user//////////////////////////////////////////////////////////////////////////////////////////


    async function deleteUserFunction(e, username) {
        e.preventDefault()
        toggleError(false);
        toggleLoading(true);
        console.log(username.toLowerCase())
        try {
            const response = await axios.delete(`http://localhost:8083/users/${username.toLowerCase()}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            console.log(response)
            resetFormFields();
            navigate("/Admin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(true);
    }


/////  to get all items  ////////////////////////////////////////////////////////////////

    useEffect(() => {

        const controller = new AbortController();
        async function fetchItems() {
            // toggleDeleteThisItem(false);
            try {
                const response = await axios.get('http://localhost:8083/items', {
                    // item_id: item_id,
                    // name_Info: nameInfo,
                    // user_username: user_username,

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,

                });
                navigate('/Admin');
                setItems(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        void fetchItems();
        return function cleanup() {
            controller.abort();
        };
    }, []);



    /////to delete item///////////////////////////////////////////////////////////////////////////////////////////

    async function deleteItemFunction(e, idToDelete) {
        e.preventDefault(idToDelete);
        toggleError(false);
        toggleLoading(true);
        console.log()

        try {


            const response = await axios.delete(`http://localhost:8083/items/${idToDelete}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                // signal: controller.signal,
            });

            // setItems(response.data);
            console.log(response)
            setIdToDelete(response.data);
            resetFormFields();
            navigate("/Admin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(true);
    }


/////  to get all subscriptions info ////////////////////////////////////////////////////////////////

    useEffect(() => {

        const controller = new AbortController();
        async function fetchSubscriptions() {
            togglePatchThisSubscription(false);
            try {
                const response = await axios.get('http://localhost:8083/subscriptions', {


                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });

                setSubscriptions(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        void fetchSubscriptions();
        return function cleanup() {
            controller.abort();
        }
    }, []);


    /////// Change info bij subscriptions /////////////////////////////////////////


    async function patchSubscription(data) {
        // e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {




            const response = await axios.patch(`http://localhost:8083/subscriptions/${subscriptionIdToPatch}`,
                data, {
                    // expirationDate: expirationDate,
                    // userInfo: userInfo,
                    // subscriptionStatus: subscriptionStatus,
                    // typeSubscription: typeSubscription,


                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
            togglePatchThisSubscription(true);
            console.log('Subscription updated:', response.data);
           resetFormFields();
            navigate("/Admin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(true);
    }



    /////// Change info bij users /////////////////////////////////////////
    async function patchUser(data) {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.patch(`http://localhost:8083/users/${userIdToPatch}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
            togglePatchThisUser(true);
            console.log(response);
            resetFormFields();
            navigate("/Admin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(true);
    }


    // //to send mail//////////////////////////////////////////////////////////////////////////////////
    function emailUserFunction(data) {
        data.recipient = userIdToEmail;
        void sendMail(data);
    }


    async function sendMail(data) {
        try {
            const response = await axios.post('http://localhost:8083/sendMail', {
                data
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            if (response.status === 200) {
                toggleSuccesSendMail(true);
            }
            console.log("Response adminpage")
            console.log(response.status);
            resetFormFields();
            navigate("/Admin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(true);
    }


// return//////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (


        <main className="page">
            {(isAuth && user.authority === "ROLE_USER" && !admin) &&
                <article className="page" > <h1>Sorry, go back to your<Link to="/Account"> account </Link> 😵</h1>
                    <h2>Only for Administrators </h2>

                    <Header icon={pic}/>
                </article>}
            {(isAuth && user.authority === "ROLE_ADMIN" && !admin) &&

                <article className="page2">



                    {/*//////////             accounts lijst/////////////////////////////////////////////////////////////////////////*/}


                    {/*<h2 className="margin-top2">Lijst van accounts </h2>*/}
                    {/*<select*/}
                    {/*    name="accounts"*/}
                    {/*    id="userInfo"*/}
                    {/*    type="list"*/}
                    {/*    value={accountsList}*/}
                    {/*    onChange={(e) => setAccountsList(e.target.value)}*/}
                    {/*>*/}
                    {/*    <option>selecteer een username</option>*/}
                    {/*    {accountsList.map((list) => {*/}
                    {/*        return <option key={list.id}*/}
                    {/*                       value={list.userInfo}>*/}
                    {/*            {list.comment} - {list.email} -*/}
                    {/*            {list.userInfo}*/}
                    {/*        </option>*/}
                    {/*    })}*/}

                    {/*</select>*/}


                    {/*change subscription ///////////////////////////////////////////////////////////////////////////////////////*/}
                    <section>

                        <fieldset>
                            <legend><h2 className="margin-top2">Lijst en aanpassen van subscriptions</h2></legend>

                            <select
                                className="subscription-change"
                                // id="typeSubscription"
                                // type="list"
                                // value={subscriptionIdToPatch}
                                onChange={e => setSubscriptionIdToPatch(e.currentTarget.value)}
                            >
                                <option>selecteer subscription</option>
                                {subscriptions.map(list => (
                                    <option
                                        key={list.id}
                                        value={list.id}
                                    >{list.typeSubscription}- {list.subscriptionStatus}-
                                        {list.expirationDate}
                                    </option>
                                ))}
                            </select>


                            <form
                                key={3}
                                className="margin-top3"
                                onSubmit={handleSubmit3(patchSubscription)}
                            >
                                <Input
                                    labelText="SubscriptionStatus"
                                    type="text"
                                    name="Status"
                                    // value="SubscriptionStatus"
                                    className="input_text"
                                    register={register5}
                                    errors={errors5}
                                    // onChange={(e) => setSubscriptionStatus(e.target.value)}
                                />

                                <Input
                                    labelText="expirationDate"
                                    type="date"
                                    name="expirationDate"
                                    // value="expirationDate"
                                    className="input_text"
                                    register={register6}
                                    errors={errors6}
                                    // onChange={(e) => setExpirationDate(e.target.value)}
                                />

                                <Button
                                    type="submit"
                                    className="button-ellips"
                                >
                                    Aanpassen
                                </Button>

                                {patchThisSubscription &&
                                    <h4 className="margin-top1">De subscription is gewijzigd.</h4>}

                            </form>


                        </fieldset>
                    </section>




                    {/*change user///////////////////////////////////////////////////////////////////////////////////////*/}
                    <section>
                        <fieldset>
                            <legend> <h2 className="margin-top2">Aanpassen van user</h2></legend>

                            <select
                                className="user-change"
                                onChange={e => setUserIdToPatch(e.currentTarget.value)}
                            >
                                <option>selecteer een username</option>
                                {users.map(user => (
                                    <option
                                        key={user.username}
                                        value={user.username}
                                    >
                                        {user.username}
                                    </option>
                                ))}
                            </select>


                            <form
                                key={1}
                                className="margin-top2"
                                onSubmit={handleSubmit1(patchUser)}
                            >
                                <Input
                                    labelText="wachtwoord"
                                    type="text"
                                    name="password"
                                    className="input_text"
                                    register={register3}
                                    errors={errors3}
                                />

                                <Input
                                    labelText="username"
                                    type="text"
                                    name="username"
                                    className="input_text"
                                    register={register4}
                                    errors={errors4}
                                />

                                <Button
                                    type="submit"
                                    className="button-ellips"
                                >
                                    versturen
                                </Button>
                                {patchThisUser &&
                                    <h4 className="margin-top1">De user is gewijzigd.</h4>}

                            </form>
                        </fieldset>
                    </section>

                    {/*/////  lijst USERS n delete///////////////////////////////////////////////////*/}

                    <fieldset>
                        <legend> <h2 className="margin-top2">Lijst van users </h2></legend>
                        <select
                            name="users"
                            id="username"
                            type="list"
                            value={singleUser}
                            onChange={(e) => setSingleUser(e.target.value)}
                        >
                            <option>selecteer een username</option>
                            {users.map((user) => {
                                return <option key={user.id}
                                               value={user.username}>
                                    {user.email} - {user.nameInfo} -
                                    {user.username}
                                </option>
                            })}
                        </select>
                        <button id="button-box" className="button" type="submit"

                                onClick={(e) => deleteUserFunction(e, singleUser)}>
                            Verwijderen van User
                        </button>

                    </fieldset>





                    {/*Items lijst/////////////////////////////////////////////////////////////////////////.*/}


                    <fieldset>
                        <legend> <h2 className="margin-top2">Lijst van items </h2></legend>


                        <select
                            name="items"
                            id="tags"
                            type="list"
                            value={toDelete}
                            onChange={(e) => setToDelete(e.target.value)}
                        >
                            <option>selecteer een item</option>
                            {items.map((item) => {
                                return <option key={item.id}
                                               value={item.id}> {item.tags}-{item.nameInfo}--item id/{item.id}
                                </option>
                            })}
                        </select>


                        <button id="button-box" className="button" type="submit"

                                onClick={(e) => deleteItemFunction(e, toDelete)}>
                            Verwijderen van Item
                        </button>

                    </fieldset>

                    {/*mail/////////////////////////////////////////////////////////////////////////.*/}

                    <section>
                        <fieldset>
                            <legend>  <h2 className="margin-top2">Bericht versturen</h2></legend>

                            <form
                                key={2}
                                onSubmit={handleSubmit2(emailUserFunction)}
                            >
                                <div className="margin-bottom2">

                                    <label htmlFor="recipient">
                                        Email naar:
                                        <select
                                            className="text_select"
                                            onChange={e => setUserIdToEmail(e.target.value)}
                                        >
                                            <option>selecteer een emailadres</option>
                                            {users.map((user) => {
                                                return (
                                                    <option
                                                        key={user.username}
                                                    >
                                                        {user.email}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </label>
                                </div>

                                <Input
                                    id="subject"
                                    labelText="Onderwerp:"
                                    type="text"
                                    name="subject"
                                    className="input_text"
                                    placeholder="onderwerp"
                                    validationRules={{
                                        required: {
                                            value: true,
                                            message: 'Dit veld is verplicht',
                                        }
                                    }}
                                    register={register7}
                                    errors={errors7}
                                />
                                {errors7.subject && <p>{errors7.subject.message}</p>}


                                <div className="textarea_field">
                                    <label htmlFor="textarea_text">
                                        Bericht:
                                        <textarea
                                            className="textarea_text"
                                            name="msgBody"
                                            rows="4"
                                            cols="50"
                                            placeholder="laat hier je bericht"
                                            {...register2("msgBody", {
                                                required: {
                                                    maxLength: "500",
                                                    message: 'Maximaal 500 karakters'
                                                }
                                            })}
                                            errors={errors2}
                                        >
                        {errors2.msgBody && <p>{errors2.msgBody.message}</p>}
                            </textarea>
                                    </label>
                                </div>

                                <Button
                                    type="submit"
                                >
                                    versturen
                                </Button>

                                {succesSendMail && <h4 className="margin-top1"> Email is verzonden.</h4>}
                            </form>
                        </fieldset>
                    </section>

                </article>}
        </main>
    );
}
export default Admin;
