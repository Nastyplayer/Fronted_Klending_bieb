
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import Header from "../../components/header/Header";
import hilado from "../../assets/hilado-en-huso.jpg";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import './Account.css';
import silk from "../../assets/silk.jpg";



function Account() {


    const { user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const [dateInfo, setDateInfo] = useState("");


    const [ id, setId] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const [file, setFile] = useState([]);

    const token = localStorage.getItem('token');
    const [addSuccessPhoto,toggleAddSuccessPhoto] = useState(false);

    const {register: register2, formState: {errors: errors2}, handleSubmit: handleSubmit2} = useForm();
    const [ textarea, setTextarea ] = useState('');


    const nameInfo = "http://localhost:8083/orders"



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

//////////////////////////////////////////////////// Reserveren
    const Order = async (e) => {
        e.preventDefault();
        console.log(item, dateInfo, user.username )
        try {

            const response = await axios.post(`${nameInfo}`, {
                itemInfo: item,
              user: user.username,

            },
                {
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response)
            resetFormFields();
            navigate("/Account");

        } catch (e) {
            console.log(e)
        }
    }






/////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        async function fetchItems() {
            const token = localStorage.getItem('token')


            try {

                const response = await axios.get(`http://localhost:8083/items`,
                    {
                        name_Info: nameInfo,
                        date_Info: dateInfo,

                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    })
                setItems(response.data);

                console.log(response.data);
                navigate("/account")
            } catch (e) {

                console.error(e);

            }

        }
        void  fetchItems()

    }, [])

///////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (


       // < p className="page2">
       //
       //
       //          <Header icon={pic} />
       //      <Main>
        <>
        <Main className="outer-container-account">
            <div className="inner-container-account">
            <div className="hilado-1">
                 <img src={hilado}/>


            <form className="form-xtra">

                <label htmlFor="name">


                    <strong>{user.username}</strong>
                    <strong> {email}</strong>
                    <div className="img-row">


                        <fieldset>
                            <legend>Item afbelding uploaden:</legend>

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
                                    <button type="submit"> Uploaden</button>


                                </label>

                            </form>
                        </fieldset>


                    </div>

                </label>



                    <fieldset>
                    <legend>Reserveren van Items</legend>

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
                                return <option
                                    value={item.nameInfo}>
                                    item id: {item.id} - {item.nameInfo}
                                </option>
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

                    <Button id="button-box" className="button" type="button" onClick={Order}>Verstuur</Button>
                    </fieldset>
            </form>
            </div>
            </div>

            </Main>

            <Footer description="Copyright © 2023 LaBruja. Alle rechten voorbehouden."
            />
       </>
    );
}

export default Account;

