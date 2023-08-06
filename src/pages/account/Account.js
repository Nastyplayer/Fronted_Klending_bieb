import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import login from "../login/Login";
import {useForm} from "react-hook-form";
import Header from "../../components/header/Header";
import pic from '../../../../KLEDING_BIEB/src/assets/hilado-en-huso.jpg';

function Account() {
    const {isAuth, authAxios, noAuthAxios} = useContext(AuthContext);
    // const { register } = useForm( {fileName: ''});
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const [dateInfo, setDateInfo] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState(false);
    //const {handleImageChance, setHandleImageChance} = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [file, setFile] = useState([]);
    const [item_id, setItem_id] = useState(0);
    const token = localStorage.getItem('token');
    const [addSuccesPhoto, toggleAddSuccessPhoto] = useState(false);
    const [nameInfo, setnameInfo] = useState("");
    const {register: register2, formState: {errors: errors2}, handleSubmit: handleSubmit2, reset} = useForm();
    const [ textarea, setTextarea ] = useState('');

    const resetFormFields = () => {
        setPreviewUrl(""); // Clear the image preview
        setItem(""); // Clear the item value
        setTextarea(""); // Clear the textarea value
        setDateInfo("");// Add other form fields you want to reset here
    };


    /////////////////////////////////////////////////////// // photo
        function handleImageChance(e) {
            const uploadedFile = e.target.files[0];
            console.log (uploadedFile);
            setFile(uploadedFile);
            setPreviewUrl(URL.createObjectURL(uploadedFile));
        }



        async function sendImage(e) {
            e.preventDefault();

            console.log(textarea)
            const formData = new FormData();
            formData.append("file", file);
          //  data.tags = [];



            try {
                const response = await axios.post(`http://localhost:8083/items/photo`, formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": `Bearer ${token}`,
                        },
                    })
                setId(response.data);
                if (response.status === 204) {
                    toggleAddSuccessPhoto(true);
                      resetFormFields();
                }
                console.log(response)
                console.log(formData)
                navigate("/Account");
            } catch (e) {
                console.error(e)
            }

            return formData
        }


////////////////////////////////////////////////////reserveren

    const Order = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8083/items`, {
                nameInfo: nameInfo,
                item_id: item_id,
                dateInfo: dateInfo
            });
            console.log(response)
            resetFormFields();
            navigate("/Account");
        } catch (e) {
            console.log(e)
        }
    }
///////////////////////////////////////////////////////////////////////////account


    useEffect(() => {
        async function fetchItems() {
            const token = localStorage.getItem('token')

            try {

                const response = await axios.get(`http://localhost:8083/items`,
                    {
                        nameInfo: nameInfo,
                        item_id: item_id,
                        dateInfo: dateInfo,

                        headers: {
                            "Content-Type": "application/json",

                        },
                    })
                setItems(response.data);

                console.log(response.data);
                navigate("/Account");
            } catch (e) {

                console.error(e);

            }



        }
        void  fetchItems()

    }, [])




//////////////////////////////////////////////////////////////////////

            return (
                  <p className="page2">
                   <h1>Leuk dat je langskomt! Maak een keuze</h1>
                    <Header icon={pic}/>

                    <ul className="form-xtra">



                        <label htmlFor="name">

                            <strong>{username}</strong>
                            <strong> {email}</strong>
                            <div className="img-row">

                                <fieldset>
                                    <legend><h2>Item afbelding uploaden:</h2></legend>
                                    <form onSubmit={sendImage} >
                                    {/*<form onSubmit={handleSubmit2(sendImage)} ref={register2}>*/}
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
                                                    rows="5"
                                                    cols="33"
                                                    placeholder="vertel ons meer over de item"
                                                    value={textarea}
                                                    onChange={(e) => setTextarea(e.target.value)}
                                                    validationRules={{
                                                        required: {
                                                            value: true,
                                                            message: 'Dit veld is verplicht',
                                                        }
                                                    }}
                                                    register={register2}

                                                    errors={errors2}
                                                />
                                                {errors2.subject && <p>{errors2.subject.message}</p>}
                                                {/*{ errors2.textarea && <p>{errors2.textarea.message}</p>}*/}

                                                <button type="submit"> Uploaden</button>


                                            </label>

                                        </form>
                                </fieldset>
                            </div>

                        </label>

                        <fieldset>



                            <legend><h2>Reserveren van Items</h2></legend>


                            <label htmlFor="Items-field">Item
                             <select
                                name="items"
                                id="item_id"
                                type="list"
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                             >
                                 <option value="kies ">Wat vind jij leuk? </option>
                                 {items.map((item) => {
                                     return <option value={item.nameInfo}> item id: {item.id} - {item.nameInfo}</option>
                                 })}


                             </select>
                         </label>

                         <label htmlFor="date_Info-field">Date
                         <input
                          name="date_Info"
                          id="date_Info-field"
                          value={dateInfo}
                           onChange={(e) => setDateInfo(e.target.value)}
                          />
                         </label>

                        <button id="button-box" className="button" type="submit" onClick={Order}>Verstuur</button>
                        </fieldset>
                    </ul>


                </p>

            );
        }

export default Account;

