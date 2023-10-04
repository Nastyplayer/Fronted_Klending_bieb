import React from 'react';

import Header from '../../components/header/Header';
import './Home.css';
import {Link} from "react-router-dom";
import logo  from "../../assets/organic.jpg";
import berg from "../../assets/berg_kleding.jpg";


function Home() {
    return (
        <main className="page">
            <Header icon={logo} title="The Lady Mayonnaise" />
            <p>
            </p>


            <p>

                Wij geloven dat elke duurzame verandering telt en dat vele kleine inspanningen uiteindelijk
                tot grote vooruitgang leiden. Tegenwoordig beweegt de fast fashion-industrie zo snel en
                onverantwoord dat deze elk jaar steeds meer schade aan het milieu en duurzaamheid toebrengt.
                We moeten kleding op een nieuwe manier gaan waarderen, waarbij kwaliteit en duurzaamheid een
                vereiste zijn. Een duurzame kledingkast is een manier waarop jij zelf kunt bijdragen aan een
                duurzamere modewereld. Voor elk item dat geleend wordt (in plaats van een nieuwe te kopen)
                hoeft er één kledingstuk minder geproduceerd te worden, wat gunstig is voor het verminderen
                van afval.

                In de meeste van onze blogs over minimalisme bespreken we de resultaten van het toepassen
                van minimalisme in ons eigen leven. Bijvoorbeeld hoe we minimalisme toepassen in onze
                kledingkast, financiën, of het verminderen van afleidingen en het creëren van meer structuur.
                Hierbij focussen we vooral op wat dit ons brengt: rust, tevredenheid en meer tijd.

            </p>

            <Header icon={berg} title= "Grotere of meer kasten gaan kopen omdat je ruimtegebruik hebt?"/>
            
            <p className="page">

                Eerst cijfers! Jaarlijks kopen wij Nederlanders voor ongeveer 20 miljard euro aan nieuwe kleding.
                Daarnaast gooien we met z'n allen zo'n 240 miljoen kilo aan textiel weg. En dat is echt zonde.
                En dus zijn er een aantal moderne Jeanne d'Arcs opgestaan die een alternatief willen bieden.

                Alternatieven zoals de "Pill Wardrobe", waarbij je minder kleding koopt en langer met je bestaande kleding doet.
                Maar ook manieren om kleding te lenen, in plaats van te kopen. Dat kan in kleine groepen met vrienden op ruilavondjes,
                maar op grotere schaal is er dus de kledingbieb.

            </p>
            <p>Lees <Link to="/Blog">hier</Link> meer over duurzaamheid</p>
            <p>Nog geen account? <Link to="/Subscription">Registreer</Link> je dan eerst.</p>

        </main>
    );
}

export default Home;


