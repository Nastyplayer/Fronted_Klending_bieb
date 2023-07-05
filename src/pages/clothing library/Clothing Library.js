import React, { useEffect, useState} from 'react';
import Header from '../../components/header/Header';


import './Clothing Library.css';
import {useNavigate,  useParams} from "react-router-dom";
import cien from "../../../../KLEDING_BIEB/src/assets/Cien.jfif";

import axios from "axios";






function ClothingLibrary(){
    const navigate = useNavigate();

   const [uploads, setUploads] = useState([]);
   // const [userData, setUserData] = useState([]);
    const [items, setItems] = useState([]);
    const [file, setFile] = useState([]);

    function handleClick() {
        console.log('We gaan direct door naar de subscription pagina!');
        navigate('/Subscription');

    }
//     useEffect(() => {
//         async function fetchItems() {
//      const token = localStorage.getItem('token')
//
//

//
//             try {
//                 const response = await axios.get(`http://localhost:8083/downloadAllFiles`, //formdata,
//
//                     {
//                         headers: {
//                             "Content-Type": "application/json",
//                             // "Authorization": `Bearer ${token}`,
//                         },
//                     });
//                 setUserData(response.data);
//                 console.log(response.data);
//                 setImage(response.data)    //.fileDocument.docFile)
//                 //setItems(response.data);
//                 //
//                 // useEffect(() => {
//                 //
//                 //         async function fetchItems() {
//                 //             try {
//                 //                 const response = await axios.get(`http://localhost:8083/items`,
//                 //                     {
//                 //                         headers: {
//                 //                             "Content-Type": "application/json",
//                 //                             // "Authorization": `Bearer ${token}`,
//                 //                         },
//                 //                     })
//                 //                 setUserData(response.data);
//                 //                 console.log(response.data)
//                 //                 setImage(response.data) //.fileDocument.docFile)
//                 //                   setItems(response.data);
//                } catch (e) {
//
//                 console.error(e)
//                 //setError(true);
//
//                 void fetchItems()
//
//             }}
//                 },
//                 [])
//
//
///////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8083/downloadAllFiles`,{

                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setUploads(response.data);
                console.log('files', response.data)
            } catch (error) {
                console.log('Error fetching uploads:', error);
            }

            try {
                const response = await axios.get(`http://localhost:8083/items`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setItems(response.data);
            } catch (error) {
                console.log('Error fetching items:', error);
            }
        }

       void fetchData();
    }, []);


/////////////////////////////////////////////////////////

     return (

                <main className="page">

                    <Header icon={cien} title="Clothing Library"/>


                    <p>
                        Het hergebruik van al bestaande kleding en materialen draagt bij aan duurzaamheid van
                        kleding
                        want er is veel tijd en materiaal gebruikt om kleding te maken.
                        Duurzame kleding wordt steeds meer populairder bij het winkelend publiek.
                        Je kunt haast geen kledingwinkel meer binnenlopen of je ziet de groene labels al hangen. Wat
                        is
                        nou precies duurzame kleding?
                        En wat is het verschil met de normale kleding?

                    </p>

                    <h1>Onze nieuwe collectie</h1>

                    <div className="page3">




                        {uploads.map((img) => {
                           return (
                               <>
                               <img key={img.item.id} src={`data:image/*;base64, ${img.file}`} alt="image" className='all-images' />
                                <p>{img.item.nameInfo}</p>
                                    </>
                            )
                                })}

                        <table>
                        {/*    <tbody>*/}
                        {/*    {items.map((item) => (*/}

                        {/*<tr key={item.item_Id}>*/}
                        {/*            <td>{item.item_Id}</td>*/}
                        {/*            <td>{item.file && <img src={item.file.url} alt={item.name_Info} />}</td>*/}
                        {/*            <td>{item.name_Info}</td>*/}
                        {/*        </tr>*/}
                        {/*    ))}*/}
                        {/*    </tbody>*/}
                        </table>
                    </div>





                    {/*<div className="itemsTable">*/}
                    {/*    <h1> Onze nieuwe collectie </h1>*/}


                    {/*    /!* Render the uploads (photos) *!/*/}
                    {/*    {uploads.map((upload, index) => (*/}
                    {/*        <img key={index} src={`data:image/jpeg;base64,${upload}`} alt="Upload"*/}
                    {/*             className='all-images'*/}

                    {/*        />*/}
                    {/*    ))}*/}



                    {/*    /!*<img src={`data:image/*;base64, ${image}`} alt="test"/>*!/*/}


                        {/*{image && image.map((img) => {*/}
                        {/*    return <img key={img} src={`data:image/*;base64, ${img}`} alt="image"*/}
                        {/*                className='all-images'/>*/}
                        {/*})}*/}

                    {/*    <table>*/}
                    {/*        <tbody>*/}

                            {/* Render the items */}
                            {/*{items.map((item) => (*/}
                            {/*    <div key={item.id}>*/}
                            {/*        <h2>{item.name}</h2>*/}
                            {/*        <p>{item.description}</p>*/}
                            {/*        /!* Add more item properties as needed *!/*/}
                            {/*    </div>*/}
                            {/*))}*/}


                            {/*{items.map((item) => {*/}
                            {/*  item.file = setFile[file];*/}
                            {/*    return <tr key={item.item_id}>*/}
                            {/*        <td>{item.item_id}</td>*/}
                            {/*        <td>{item.file && <img src={item.file.url} alt={item.nameInfo}/>}</td>*/}
                            {/*        <td>{item.nameInfo}</td>*/}

                            {/*    </tr>*/}
                            {/*})}*/}
                    {/*        </tbody>*/}



                    {/*    </table>*/}

                    {/*</div>*/}


                    <button
                        type="button" onClick={handleClick} className="appointment-button">
                        come visit us!
                    </button>


                </main>
            );


        }

        export default ClothingLibrary;













//   <p className="page3">

// </p>

//////////////////////////
//                 console.log(response.data);
//                 setItems(response.data.username);
//             }catch(e) {
//                 console.error(e);
//             }
//         toggleLoading(false);
//     }


///////////////////////////
