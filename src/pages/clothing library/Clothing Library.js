import React, { useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import './Clothing Library.css';
import {useNavigate} from "react-router-dom";
import cien from "../../assets/Cien.webp";
import axios from "axios";
import Button from "../../components/button/Button";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";






function ClothingLibrary(){
    const navigate = useNavigate();
    const [uploads, setUploads] = useState([]);;
    const [items, setItems] = useState([]);


    function handleClick() {
        console.log('We gaan direct door naar de subscription pagina!');
        navigate('/Subscription');

    }


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
                <>
                <Main className="outer-container">

                    <Header icon={cien} title="Clothing Library"/>


                    <p>
                        Het hergebruik van al bestaande kleding en materialen draagt bij aan de duurzaamheid van
                        kleding, omdat er veel tijd en materiaal gebruikt is om kleding te maken.
                        Duurzame kleding wordt steeds populairder bij het winkelend publiek.
                        Je kunt bijna geen kledingwinkel meer binnenlopen of je ziet al de groene labels hangen.
                        Maaaar,,, Wat is nou precies duurzame kleding?
                        En wat is het verschil met de normale kleding?
                    </p>

                    <h1>Onze nieuwe collectie</h1>

                    <div className="article-inner-container">

                        {uploads.map((img) => {
                           return (
                               <>
                               <img key={img.item.id} src={`data:image/*;base64, ${img.file}`} alt="image" className='all-images' />
                                   <p>{img.item.nameInfo} - id nr: {img.item.id}  - {img.item.tags} </p>
                                    </>
                            )
                                })}

                    </div>

                    <Button
                        type="button"
                        onClick={handleClick}

                    >come visit us and enjoy

                    </Button>


                </Main>

                <Footer description="Copyright © 2023 LaBruja. Alle rechten voorbehouden."
                />

          </>
          );


        }

        export default ClothingLibrary;












