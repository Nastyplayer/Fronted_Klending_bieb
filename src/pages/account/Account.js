import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import Checkbox from '../../components/checkbox/Checkbox';
//import "../App.css"
import axios from "axios";
import login from "../login/Login";
import {useForm} from "react-hook-form";


function Account() {
     const {isAuth, authAxios, noAuthAxios} = useContext(AuthContext);
    const { register } = useForm( {fileName: ''});
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const [date_Info, setDate_Info] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState(false);
  //const {handleImageChance, setHandleImageChance} = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [file, setFile] = useState("");
    const [item_id, setItem_id] = useState(0);
    const token = localStorage.getItem('token');
    const [addSuccesPhoto, toggleAddSuccessPhoto] = useState(false);
    // const tags = new Array("sustainable", "biological", "organic", "pesticide-free",
    //     "additive-free", "non-chemical", "minimalistic", "linen", "silk", "cotton", "wool",
    //     "organisch", "wol", "linnen");

    const [ textarea, setTextarea ] = useState('');



        /////////////////////////////////////////////////////// // photo
        function handleImageChance(e) {
            const uploadedFile = e.target.file[0];
            console.log (uploadedFile);
            setFile(uploadedFile);
            setPreviewUrl(URL.createObjectURL(uploadedFile));
        }

        let formData;

        async function sendImage(e) {
            e.preventDefault();

            console.log(textarea)
            formData = new FormData();
            formData.append("file", file);
          //  data.tags = [];



            try {
                const response = await axios.post(`http://localhost:8083/items/${id}/photo`, formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": `Bearer ${token}`,
                        },
                    })
              setId(response.data);
                if (response.status === 204) {
                    toggleAddSuccessPhoto(true);
                }
                console.log(formData)
            } catch (e) {
                console.error(e)
            }
    //         function handleSubmit(e) {
    //             e.preventDefault();
    //             console.log(`
    // username: ${username}
    // );}
    //

            return formData
        }
////////////////////////////////////////////////////
    const Order = async (e) => {
        e.preventDefault();
        try {
            const response = await authAxios.get(`http://localhost:8083/orders`, {
                username: username,
                item_id: item_id,
                date_Info: date_Info
            });
            console.log(response)
            if (response.status === 201) {
                navigate("/login")
            }
        } catch (e) {
            console.log(e)
        }
    }
///////////////////////////////////////////////////////////////////////////account
//         useEffect(() => {
//             async function fetchProfile() {
//
//                 try {
//                     const response = await authAxios.get(`http://localhost:8083/accounts/${username}`);
//                     setUsername(response.data.username);
//                     setEmail(response.data.email)
//                     console.log(response.data);
//                 } catch (e) {
//
//                     console.error(e);
//                     setError(true);
//                 }
//
//             }
//
//         void fetchProfile()
//
//         }, [username])

    useEffect(() => {
        async function fetchItems() {
            const token = localStorage.getItem('token')

            //////
            //   useEffect(() => {
            //       getProductData()
            //   }, []);
            //
            //   async function getProductData() {
            //       toggleLoading(true);
            //       toggleError(false);

            /////////

            try {

                const response = await axios.get(`http://localhost:8083/items`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            // "Authorization": `Bearer ${token}`,
                        },
                    })
                setItems(response.data);

                console.log(response.data);
            } catch (e) {

                console.error(e);
                //setError(true);
            }




        }
        void  fetchItems()

    }, [])




//////////////////////////////////////////////////////////////////////

            return (
                <p className="page2">


                    <ul className="form-xtra">



                        <label htmlFor="name"><h1>Leuk dat je langs komt !</h1>
                            <strong>{username}</strong>
                            <strong> {email}</strong>
                            <div className="img-row">

                                        <h2>Item afbelding uploaden en preview bekijken:</h2>

                                        <form onSubmit={sendImage}>
                                            <label htmlFor="item-image">
                                            kies afbeelding
                                            <input onChange={handleImageChance} id="item_id" type="file"

                                                   name="upload" accept="image.*"/>
                                            </label>

                                            {previewUrl &&
                                                <label> Preview:

                                                    <img src={previewUrl} alt="Voorbeeld van de afbeelding "
                                                         className="image-preview"/>
                                                </label>
                                            }

                                            <label htmlFor="Items-field">Item
                                                <select
                                                    name="items"
                                                    id="item_id"
                                                    type="list"
                                                    value={item}
                                                    onChange={(e) => setItem(e.target.value)}
                                                >
                                                    <option value="kies ">click hieronder aan wat van toepassing is</option>
                                                    <option
                                                        value=  {item.map}

                                                    ></option>
                                                    <option value="sustainable"> sustainable</option>
                                                    <option value="biological"> biological</option>
                                                    <option value="organic"> organic</option>
                                                    <option value="pesticide-free"> pesticide-free</option>
                                                    <option value="additive-free"> additive-free</option>
                                                    <option value="non-chemical"> non-chemical</option>
                                                    <option value="minimalistic"> minimalistic</option>
                                                    <option value="linen"> linen</option>
                                                    <option value="silk"> silk</option>
                                                    <option value="cotton"> cotton</option>
                                                    <option value="wool"> wool</option>
                                                    <option value="organisch"> organisch</option>
                                                    <option value="wol"> wol</option>
                                                    <option value="linnen"> linnen</option>

                                                </select>
                                            </label>

                                            <label htmlFor="FileName">
                                                <textarea
                                                    id="FileName"
                                                    /// value={comment}
                                                    //  onChange={(e) => setComment(e.target.value)}
                                                    rows="3"
                                                    cols="33"
                                                    placeholder="vertel ons meer over de item"
                                                    value={textarea}
                                                    onChange={(e) => setTextarea(e.target.value)}
                                                />
                                                <button type="submit"> Uploaden</button>

                                                {/*<button type="submit">*/}
                                                {/*    Versturen*/}
                                                {/*</button>*/}
                                            </label>

                                        </form>

                            </div>

                        </label>





                        <h2>Reserveren</h2>


                        {/*{items && items.map((test) => {*/}
                        {/*return <label htmlFor={`${test.id}-${test.nameInfo}`}>Item:*/}
                        {/*    <input*/}
                        {/*        type="list"*/}
                        {/*        id={`${test.id}-${test.nameInfo}`}*/}
                        {/*        value={test.nameInfo}*/}
                        {/*    />*/}
                        {/*</label>*/}


                         <label htmlFor="Items-field">Item
                             <select
                                name="items"
                                id="item_id"
                                type="list"
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                             >
                                 <option value="kies ">Wat vind jij leuk? </option>
                                 {items.map((test) => {
                                     return <option value={test.nameInfo}> item id: {test.id} - {test.nameInfo}</option>
                                 })}


                               </select>
                         </label>

                         <label htmlFor="date_Info-field">Date
                         <input
                          name="date_Info"
                          id="date_Info-field"
                          value={date_Info}
                           onChange={(e) => setDate_Info(e.target.value)}
                          />
                         </label>

                        <button id="button-box" className="button" type="submit" onClick={Order}>Verstuur</button>

                    </ul>


                </p>
            );
        }

export default Account;

//<strong>{username}</strong>

//<strong> {email}</strong>
