import React from 'react';


import Header from '../../components/header/Header';
import './Appointments.css';
import {Link} from "react-router-dom";
import bib from "../../assets/Mar_Bib.jpg";


function Appointments() {
  return (


    <main className="page">
      <Header  icon={bib } title="Leuk dat je langs komt" />


      <p className="page">
        Via info @@@@@ domein.nl neem je eenvoudig contact met ons op.
      </p>
       <p>
        We beantwoorden je vragen zo snel mogelijk.
      </p>

        <p>Lees <Link to="/clothinglibrary">hier</Link> meer over kleding.</p>


    </main>
  );
}

export default Appointments;