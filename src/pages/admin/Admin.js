
import React, { useEffect, useState, useContext} from 'react';
import './Admin.css';
import axios from "axios";
import Input from "../../components/input/Input";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";


function Admin() {


const navigate = useNavigate();
const token = localStorage.getItem('token');
const [error, toggleError] = useState(false);
const [loading, toggleLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [users, setUsers] = useState([]);
const [singleUser, setSingleUser] = useState('');
const [accounts, setAccounts] = useState([]);
const [accountsList, setAccountsList] = useState('');
const [toDelete, setToDelete] = useState([]);
const [items, setItems] = useState([]);
const [setIdToDelete] = useState("");
const [orders, setOrders] = useState([]);
const [ordersList,  setOrdersList] = useState([]);
const [subscriptions, setSubscriptions] = useState([]);
const [setSubscriptionsList] = useState([]);
const [expirationDate] = useState("");
const [typeSubscription] = useState("");
const [PatchThisSubscription, togglePatchThisSubscription] = useState(false);
const [subscriptionIdToPatch, setSubscriptionIdToPatch] = useState("");
const  subscriptionStatus = "http://localhost:8083/subscriptions/"
const {register, handleSubmit: handleSubmit1, formState: {errors}} = useForm();
const [PatchThisUser, togglePatchThisUser] = useState(false);
const [userIdToPatch, setUserIdToPatch] = useState("");
const {isAuth, user, email} = useContext(AuthContext);
const [admin] = useState(false);
const [userIdToEmail, setUserIdToEmail] = useState("");
const [succesSendMail, toggleSuccesSendMail] = useState(false);


const { register: register2, formState: {errors: errors2}, handleSubmit: handleSubmit2, reset} = useForm();
const { register: register3, handleSubmit: handleSubmit3, reset: resetForm3, formState: { errors: errors3 } } = useForm();
const { register: register4, handleSubmit: handleSubmit4, reset: resetForm4, formState: { errors: errors4 } } = useForm();
const { register: register5, handleSubmit: handleSubmit5, reset: resetForm5, formState: { errors: errors5 } } = useForm();
const { register: register6, handleSubmit: handleSubmit6, reset: resetForm6, formState: { errors: errors6 } } = useForm();
const { register: register7, handleSubmit: handleSubmit7, reset: resetForm7, formState: { errors: errors7 } } = useForm();
const resetFormFields = () => {
    setSingleUser("");
    setToDelete([]);
    setUserIdToPatch("");
    setUserIdToEmail("");
    toggleSuccesSendMail(false);
    togglePatchThisUser(false);
    resetForm3();
    resetForm5();
    resetForm6();
    resetForm7();
};


    useEffect(() => {

        const controller = new AbortController();

        async function fetchUsers() {

            togglePatchThisUser(false);
            toggleLoading(true);

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
            toggleLoading(false);
              }

        void fetchUsers();
        return function cleanup() {
            controller.abort();
        };
    },  [token]);


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
            navigate('/Admin');
        } catch (e) {
            console.error(e);
            toggleError(true);

        } finally {

        }
        toggleLoading(false);
    }


    useEffect(() => {

        const controller = new AbortController();
        async function fetchItems() {
            toggleError(false);
            toggleLoading(true);
            try {
                const response = await axios.get('http://localhost:8083/items', {


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
                toggleError(true);

            } finally {

            }
            toggleLoading(false);
        }
        void fetchItems();
        return function cleanup() {
            controller.abort();
        };
    },  [token]);


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

            });
            setItems(response.data);
            console.log(response)
            setIdToDelete(response.data);
            resetFormFields();
            navigate('/Admin');
        } catch (e) {
            console.error(e);
            toggleError(true);


        } finally {

        }
        toggleLoading(false);
    }


    useEffect(() => {

        const controller = new AbortController();
        async function fetchAccounts() {
            toggleLoading(true);
            try {
                const response = await axios.get('http://localhost:8083/accounts', {

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });

                setAccounts(response.data);
                navigate('/Admin');
            } catch (e) {
                console.error(e);
            } finally {

            }
            toggleLoading(false);
        }

        void fetchAccounts();
        return function cleanup() {
            controller.abort();
        }
    },  [token]);



    useEffect(() => {

        const controller = new AbortController();
        async function fetchOrders() {
            toggleLoading(true);
            try {
                const response = await axios.get('http://localhost:8083/orders', {

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });

                setOrders(response.data);
                navigate('/Admin');
            } catch (e) {
                console.error(e);
            } finally {
            }
            toggleLoading(false);
        }

        void fetchOrders();
        return function cleanup() {
            controller.abort();
        }
    },  [token]);



    useEffect(() => {

        const controller = new AbortController();
        async function fetchSubscriptions() {
            togglePatchThisSubscription(false);
            toggleLoading(true);
            try {
                const response = await axios.get('http://localhost:8083/subscriptions', {


                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });

                setSubscriptions(response.data);
                navigate('/Admin');
                setSubscriptionsList(response.data);
            } catch (e) {
                console.error(e);
            } finally {

            }
            toggleLoading(false);
        }

          void fetchSubscriptions();
        return function cleanup() {
            controller.abort();
        }
    },  [token]);



    async function patchSubscription(data) {
        // e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {

            const response = await axios.patch(`http://localhost:8083/subscriptions/${subscriptionIdToPatch}`,
                data, {
                    expirationDate: expirationDate,

                    subscriptionStatus: subscriptionStatus,
                    typeSubscription: typeSubscription,


                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
            togglePatchThisSubscription(true);
            console.log('Subscription updated:', response.data);
            resetFormFields();
            navigate('/Admin');
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {

        }
        toggleLoading(false);
    }

    async function patchUser(data) {
        toggleError(false);
        toggleLoading(true);
        console.log(email,  user.username )
        try {
            const response = await axios.patch(`http://localhost:8083/users/${userIdToPatch}`,

                {

                },

                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
            togglePatchThisUser(true);
            console.log(response);
            resetFormFields();
            navigate('/Admin');
        } catch (e) {
            console.error(e);
            toggleError(true);
            setErrorMessage("Er is een fout opgetreden.");
        } finally {

        }
        toggleLoading(false);
    }


    function emailUserFunction(data) {
        data.recipient = userIdToEmail;
        void sendMail(data);
    }


    async function sendMail(data) {
        toggleError(false)
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
            console.log(response);
            console.log(response.status);
            resetFormFields();
            navigate('/Admin');
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {

        }
        toggleLoading(false);
    }


    return (

        <>
            {loading && <p>Loading...</p>}
            {error && <p>{errorMessage}</p>}

        <Main className="outer-container-admin">
          <div className="inner-container-admin">
              <div className="page_admin">
        {/*<Main className="page">*/}
            {(isAuth && user.authority === "ROLE_USER" && !admin) &&
                <article className="page" > <h1>Sorry, go back to your<Link to="/Account"> account </Link>  😵</h1>
                    <h2>Only for Administrator </h2>


                </article>}
            {(isAuth && user.authority === "ROLE_ADMIN" && !admin) &&

                <article className="page2">



                <fieldset>

                <legend>Lijst van accounts</legend>

                <h3>id - username - email - comment</h3>
                <select
                name="accounts"
                id="userInfo"
                type="list"
                value={accountsList}
                onChange={(e) => setAccountsList(e.target.value)}
                >
                <option>selecteer een username</option>
            {accounts.map((list) => {
                return <option key={list.id}
                value={list.userInfo}>
            {list.id} - {list.userInfo} - {list.email} - {list.comment}

                </option>
            })}

                </select>
                </fieldset>

                <fieldset>

                <legend>Lijst  van orders</legend>

                <h3>order id  en items  </h3>
                <select
                name="orders"
                id="itemInfo"
                type="list"
                value={ordersList}
                onChange={(e) => setOrdersList(e.target.value)}
                >
                <option>selecteer een order</option>
            {orders.map((list) => {
                return <option key={list.id}
                value={list.itemInfo}>
                Order id {list.id}--{list.itemInfo}
                </option>
            })}

                </select>



                </fieldset>






                <fieldset>

                <legend>Lijst van users</legend>

                <h3> username - email </h3>
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
            {user.username} - {user.email}

                </option>
            })}
                </select>
                <Button id="button-box" className="button" type="submit"

                onClick={(e) => deleteUserFunction(e, singleUser)}>
                Verwijderen van User
                </Button>

                </fieldset>




                <section>
                <fieldset>

                <legend>Aanpassen van user</legend>
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
            {user.username}-{user.email}
                </option>
                ))}
                </select>


                <form
                key={1}
                className="margin-top2"
                onSubmit={handleSubmit4(patchUser)}
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
                labelText="emailadres"
                type="email"
                name="emailadress"
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

                </form>
                </fieldset>
                </section>


                <section>

                <fieldset>

                <legend>Lijst en aanpassen van subscriptions</legend>

                <select
                className="subscription-change"
                onChange={e => setSubscriptionIdToPatch(e.currentTarget.value)}
                >
                <option>selecteer subscription</option>
            {subscriptions.map(list => (
                <option
                key={list.id}
                value={list.id}
                >{list.typeSubscription}-id nr: {list.id}- {list.subscriptionStatus}-
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
                className="input_text"
                register={register5}
                errors={errors5}

                />

                <Input
                labelText="expirationDate"
                type="date"
                name="expirationDate"
                className="input_text"
                register={register6}
                errors={errors6}

                />
                <Input labelText="typeSubscription"
                type="text"
                name="typeSubscriptiono"

                className="input_text"
                register={register}
                errors={errors}


                />

                <Button
                type="submit"
                className="button-ellips"
                >
                Aanpassen
                </Button>


                </form>
                </fieldset>
                </section>


                <fieldset>

                <legend>Lijst van items</legend>

                <h3>Tags - item Info - item Id</h3>
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


                <Button id="button-box" className="button" type="submit"

                onClick={(e) => deleteItemFunction(e, toDelete)}>
                Verwijderen van Item
                </Button>

                </fieldset>




                <section>
                <fieldset>


                <legend>Bericht versturen</legend>
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

                 </article>
            }
              </div>
          </div>



        </Main>
            <Footer description="Copyright © 2023 LaBruja. Alle rechten voorbehouden."
            />
        </>

  );
}
export default Admin;


