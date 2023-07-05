import React from 'react';
import logo from '../../../../KLEDING_BIEB/src/assets/R_organic.jfif';
import Header from '../../components/header/Header';
import './Home.css';
import {Link} from "react-router-dom";
import afspraak from '../../../../KLEDING_BIEB/src/assets/berg_kleding.jpg';

function Home() {
    return (
        <main className="page">
            <Header icon={logo} title="The Lady Mayonnaise" />
            <p>
            </p>


            <p>
                Wij geloven dat elke duurzame verandering telt en dat veel kleine duwtjes uiteindelijk tot grote sprongen voorwaarts leiden.
                Tegenwoordig  beweegt de fast fashion-industrie zo snel en onverantwoord dat elke jaar meer en meer tegen het milieu en duurzaamheid ingaat.
                We moeten kleding op een nieuwe manier gaan waarderen, waarbij kwaliteit en duurzaamheid een vereiste is.
                Een duurzame kledingkast is een goede manier waarop jij zelf kan bijdragen aan een duurzamere modewereld.
                Voor ieder item dat geleend wordt (in plaats van een nieuwe te kopen) hoeft er één kledingstuk minder geproduceerd te worden en
                op die manier één stuk minder op de afval,  dus dat is gunstig.

                In de meeste van onze blogs over minimalisme hebben we het over de resultaten van het toepassen van minimalisme in ons eigen leven.
                Bijvoorbeeld hoe we minimalisme toepassen in de kledingkast, in onze financiën of in minder afleidingen en meer structuur.
                En dan hebben we het vooral over wat dit ons brengt; rust, tevredenheid en meer tijd.
            </p>

            <Header icon={afspraak} title= "Grotere of meer kasten gaan kopen omdat je ruimtegebruik hebt?"/>
            
            <p className="page">

                Eerst cijfertjes! Jaarlijks kopen wij Nederlanders voor ongeveer 20 miljard euro aan nieuwe kleding.
                Daarnaast gooien we met z’n allen zo’n 240 miljoen kilo aan textiel weg. En that sucks. Echt.
                En dus zijn er een aantal moderne Jeanne’s d’Arcs opgestaan die een alternatief willen bieden.

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